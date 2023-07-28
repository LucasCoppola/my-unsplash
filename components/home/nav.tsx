import { authOptions } from '@/utils/authOptions'
import Navbar from './navbar'
import { getServerSession } from 'next-auth/next'

export default async function Nav() {
	const session = await getServerSession(authOptions)
	return <Navbar session={session} />
}
