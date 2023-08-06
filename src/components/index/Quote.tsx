import Image from 'next/image'
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa'
import IconLink from './IconLink'

const Quote = () => {
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl">
            <div className="w-auto pt-4 px-4 flex justify-center">
                <Image
                    src="https://github.com/al-gilang-p.png"
                    alt="Picture of the author"
                    height={500}
                    width={500}
                    className="rounded-full aspect-square"
                />
            </div>
            <div className="w-full object-fill sm:col-span-3 text-center lg:text-left">
                <div className="p-4 text-center">
                    <p className="uppercase font-bold text-4xl">
                        Alwin <span className="text-orange-500">Gilang</span>{' '}
                        Permana
                    </p>
                    <p className="font-semibold text-xl dark:text-zinc-400 italic">
                        Web Developer
                    </p>
                </div>
                <div className="max-w-full grid grid-cols-5 pb-4 px-4 gap-2 mx-auto md:max-w-xs">
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
    )
}

export default Quote
