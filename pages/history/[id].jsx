import Link from "next/link"
import { useRouter } from "next/router"
import { DetailSection, Header, Back } from "../../components/home/history/style"

const HistoryDetails = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <DetailSection>
            <Header>{id}</Header>
            <Link href="/" passHref>
                <Back>back</Back>
            </Link>
        </DetailSection>
    )
}

export default HistoryDetails