import { client } from '../lib/axios'
import { useQuery } from 'react-query'

export const getPosts = () => {
    return useQuery({
    queryFn: async () => {
      const postsResponse = await client.get('/posts')    

      return postsResponse;
    },
  })
}