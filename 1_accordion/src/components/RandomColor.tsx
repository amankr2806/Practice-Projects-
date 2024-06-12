import { useRouter } from "next/navigation"


const RandomColor = () => {

    const router = useRouter();

    const handleRoute =() => {
        
        router.push("/RandomColor");
    }
    return <>
    <button onClick={handleRoute}>Random color route</button>
    </>
}

export default RandomColor;