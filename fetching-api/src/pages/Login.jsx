import { client } from '../lib/axios'
import { useMutation } from 'react-query'
import { useFormik } from "formik";

const Login = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		onSubmit: () => {
			mutate();
			console.log(mutate);
		}
	});

	const { mutate, isLoading } = useMutation({
		mutationFn: async () => {
			const { email, password } = formik.values;
			const loginResponse = await client.post('/login', {
				email, 
				password
			});

			return loginResponse;
		}
	});

	const handleFormInput = (event) => {
		formik.setFieldValue(event.target.name, event.target.value);
	}

	return (
		<div className="card w-1/2 bg-blue-400 my-5">
			<div className="card-body">
				<div className="card-title">{formik.values.email}</div>
				<form onSubmit={formik.handleSubmit}>
					<div className="form-control w-full">
						<label className="label"> 
							<span className="text-md text-slate-100 font-semibold">Email</span> 
						</label>
						<input onChange={handleFormInput} name="email" type="text" placeholder="Enter your email" className="input input-bordered w-full" />
					</div>
					<div className="form-control w-full">
						<label className="label"> 
							<span className="text-md text-slate-100 font-semibold">Password</span> 
						</label>
						<input onChange={handleFormInput} name="password" type="password" placeholder="Enter your password" className="input input-bordered w-full" />
					</div>
					<button type="submit" className="btn btn-slate-300 mt-4">Login</button>
				</form>
			</div>
		</div>
	)
}

export default Login;