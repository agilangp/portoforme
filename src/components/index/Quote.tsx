import Image from "next/image"
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa"
import IconLink from "./IconLink"

const Quote = () => {
    return (
        <div className="bg-white dark:bg-zinc-900 lg:grid lg:grid-cols-4 flex flex-col rounded-xl shadow-xl">
            <div className="flex flex-wrap justify-center pt-4 lg:pt-0">
                <div className="w-80 h-80 lg:w-full lg:h-full relative fill-current">
                    <Image
                        src="https://github.com/al-gilang-p.png"
                        alt="Picture of the author"
                        layout="fill"
                        className="lg:rounded-l-xl lg:rounded-r-none rounded-full aspect-square object-cover"
                    />
                </div>
            </div>
            <div className="w-full object-fill sm:col-span-3 flex flex-col place-content-between text-center lg:text-left">
                <div className="p-4">
                    <p className="uppercase font-bold text-4xl">
                        Alwin <span className="text-orange-500">Gilang</span>{" "}
                        Permana
                    </p>
                    <p className="font-semibold text-xl dark:text-zinc-400 italic">
                        Software Developer
                    </p>
                    <p className="font-medium text-2xl py-8 lg:text-right">{`"Here lies My Hopes and Dreams about something I truly love. I know it ain't much, but it's honest work"`}</p>
                </div>
                <div>
                    <hr className="dark:border-zinc-800" />
                    <div className="flex flex-wrap gap-2 p-4 justify-center lg:justify-start">
                        <IconLink
                            href="https://www.instagram.com/alwin_gilang/"
                            aria-label="instagram-button"
                        >
                            <FaInstagram size={25} />
                        </IconLink>
                        <IconLink
                            href="https://web.facebook.com/al.gilang.p"
                            aria-label="facebook-button"
                        >
                            <FaFacebook size={25} />
                        </IconLink>
                        <IconLink
                            href="https://twitter.com/alwin_gilang"
                            aria-label="twitter-button"
                        >
                            <FaTwitter size={25} />
                        </IconLink>
                        <IconLink
                            href="https://github.com/al-gilang-p"
                            aria-label="github-button"
                        >
                            <FaGithub size={25} />
                        </IconLink>
                        <IconLink
                            href="https://www.linkedin.com/in/alwin-gilang-permana-53674b170"
                            aria-label="linkedin-button"
                        >
                            <FaLinkedin size={25} />
                        </IconLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote
