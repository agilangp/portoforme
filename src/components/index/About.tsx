import Card from './Card'

const About = () => {
    return (
        <Card title="Hello There">
            <p className="text-justify">
                Hi my name is<b className="text-orange-500"> Gilang</b>. I am a
                software developer. Passionate about web development and
                drawing.
            </p>
            <p className="font-bold mt-4">
                Based in Magetan Regency, East Java, Indonesia
            </p>
        </Card>
    )
}

export default About
