import ProfileRadialGradient from "@/components/svg/radial-gradient";
import "./profile.css";
import ImageResize from "@/components/image-resize";
import NavigationBarLink from "@/components/navigation-bar-link";

export default function () {
    return (
        <main>
            <div id="Home" className="page">
                <p id="Title" className="font-size-80px">Hello! My name is Italo Aquino</p>
                <p id="Greetings" className="font-size-60px">Nice to meet you!</p>
            </div>

            <div id="AboutMe" className="page">
                <p id="Title" className="font-size-100px">About Me</p>
                <div className="width-75%">
                    <p id="Info" className="font-size-45px">I am 15 years old and I absolutely love programming, but I lack of money so I need a way to get it, my solution was to learn front-end development and here I am, working on this website.<br />It’s really interesting to see how someone can sit all day long an still make money doing things they like and have time to pay attention to their family, that’s one of my reasons to choose front-end development, another reason is that compared to C, assembly and Vulkan, front-end and frameworks like tailwind, bootstrap, nextjs are really easy and fast to learn.<br />You may be cursing me to say that, but I know there’s many other reasons to learn front-end development and to work doing it, no need to throw stones at me.</p>
                </div>
            </div>

            <div id="Contacts" className="page">
                <p id="Title" className="font-size-100px">Contacts</p>

                <div id="ContactList">
                    <div id="Discord" className="profile-account">
                        <ProfileRadialGradient></ProfileRadialGradient>

                        <img src="/Discord.png" className="profile-picture"></img>

                        <p className="profile-name">#italovh</p>
                    </div>

                    <a href="https://github.com/ItaloYt" target="_blank">
                        <div id="Github" className="profile-account">
                            <ProfileRadialGradient></ProfileRadialGradient>

                            <img src="/Github.png" className="profile-picture"></img>

                            <p className="profile-name">ItaloYt</p>
                        </div>
                    </a>

                    <a href="https://t.me/italovh" target="_blank">
                        <div id="Telegram" className="profile-account">
                            <ProfileRadialGradient></ProfileRadialGradient>

                            <img src="/Telegram.png" className="profile-picture"></img>

                            <p className="profile-name">@italovh</p>
                        </div>
                    </a>
                </div>

                <p id="EmailHint" className="font-size-50px">Email in github profile</p>
            </div>

            <div id="Skills" className="page">
                <p id="Title" className="font-size-100px">Skills</p>

                <div id="SkillRows">
                    <div id="SkillRow1">
                        <ImageResize src="/Nextjs.webp" href="https://nextjs.org/"></ImageResize>
                        <ImageResize src="/Html5.webp" href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"></ImageResize>
                        <ImageResize src="/Css3.webp" href="https://developer.mozilla.org/en-US/docs/Web/CSS"></ImageResize>
                        <ImageResize src="/Javascript.webp" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"></ImageResize>
                        <ImageResize src="/Typescript.webp" href="https://www.typescriptlang.org/docs/"></ImageResize>
                    </div>
                    <div id="SkillRow2">
                        <ImageResize src="/Git.webp" href="https://git-scm.com/doc"></ImageResize>
                        <ImageResize src="/React.webp" href="https://react.dev/"></ImageResize>
                        <ImageResize src="/Tailwind.webp" href="https://v2.tailwindcss.com/docs"></ImageResize>
                    </div>
                </div>
            </div>

            <div id="Projects" className="page">
                <p id="Title" className="font-size-100px">Projects</p>

                <div id="Nothing">
                    <p className="font-size-60px">No projects yet</p>
                </div>
            </div>

            <nav id="NavigationBar">
                <NavigationBarLink to={0}>Home</NavigationBarLink>
                <NavigationBarLink to={970}>About Me</NavigationBarLink>
                <NavigationBarLink to={1930}>Contacts</NavigationBarLink>
                <NavigationBarLink to={2890}>Skills</NavigationBarLink>
                <NavigationBarLink to={3908}>Projects</NavigationBarLink>
            </nav>
        </main >
    );
}