import Image from "next/future/image"

const About = () => {
    // const css = { width: '100%', height: 'auto' }
    return <div>
        <h2>About</h2>
        <Image src="/example.png" width={100} height={100} />
    </div>
}

export default About