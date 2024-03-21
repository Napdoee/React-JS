import { client } from '../../config/axios'
import { useQuery } from 'react-query'

export const getProjects = () => {
  return useQuery({
    queryKey: ['all'],
    queryFn: async () => {
      const projects = await client.get('/projects')

      return projects;
    },
  })
}

export const getProjectById = async (projectId) => {
  return useQuery(['project', projectId], await client.get(`/projects/${projectId}`));
}

export const getProjectImage = (id) => {
  return useQuery({
    queryKey: ['image'],
    queryFn: async () => {
      const project = await client.get(`/projects/${id}`)

      return project;
    },
  })
}