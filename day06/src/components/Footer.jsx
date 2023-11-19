import { FaInstagram, FaLinkedin, FaSlack, FaTwitter, FaYoutube } from "react-icons/fa6"

const Footer = () => {
  const items = [
    {
      resources: [
        { title: "Blog", link: "#" },
        { title: "Library", link: "#" },
        { title: "Release Notes", link: "#" },
        { title: "Slack Community", link: "#" },
      ],
      help: [
        { title: "My Account", link: "#" },
        { title: "Support Docs", link: "#" },
        { title: "Contact Us", link: "#" },
        { title: "Feature Requests", link: "#" },
      ],
      company: [
        { title: "Stark Framework", link: "#" },
        { title: "Privacy Policy", link: "#" },
        { title: "Terms Of Service", link: "#" },
        { title: "Code Of Conduct", link: "#" },
      ],

      security: [
        { title: "Security Overview", link: "#" },
        { title: "Cookie Policy", link: "#" },
        { title: "GDPR", link: "#" },
        { title: "Status", link: "#" },
      ],

      design: [
        { title: "Stark for Figma", link: "#" },
        { title: "Stark for FigJam", link: "#" },
        { title: "Stark for Sketch", link: "#" },
        { title: "Stark for Adobe XD", link: "#" },
      ],

      developer: [
        { title: "Stark for Chrome", link: "#" },
        { title: "Stark for Firefox", link: "#" },
        { title: "Stark for Edge", link: "#" },
        { title: "Stark for Safari", link: "#" },
        { title: "Stark for Arc", link: "#" },
        { title: "Stark for Brave", link: "#" },
      ]
    }
  ]

  return (
    <div className="min-h-[100vh] md:min-h-[80vh] lg:min-h-[60vh] bg-[#122e57] px-6 py-8 lg:p-12 flex flex-col justify-between">
      <div className="w-full grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-6">
        {items.map((item, x) => (
          <>
            <ul className="text-yellow-50">
              <h3 className="font-extrabold text-md uppercase text-white">Resources</h3>
              {item.resources.map((res, y) => (
                <li className="my-4 text-base font-semibold capitalize" key={y}><a href={res.link} className="hover:underline">{res.title}</a></li>
              ))}
            </ul>
            <ul className="text-yellow-50">
              <h3 className="font-extrabold text-md uppercase text-white">Help</h3>
              {item.help.map((res, y) => (
                <li className="my-4 text-base font-semibold capitalize" key={y}><a href={res.link} className="hover:underline">{res.title}</a></li>
              ))}
            </ul>
            <ul className="text-yellow-50">
              <h3 className="font-extrabold text-md uppercase text-white">Company</h3>
              {item.company.map((res, y) => (
                <li className="my-4 text-base font-semibold capitalize" key={y}><a href={res.link} className="hover:underline">{res.title}</a></li>
              ))}
            </ul>
            <ul className="text-yellow-50">

              <h3 className="font-extrabold text-md uppercase text-white">Security</h3>
              {item.security.map((res, y) => (
                <li className="my-4 text-base font-semibold capitalize" key={y}><a href={res.link} className="hover:underline">{res.title}</a></li>
              ))}
            </ul>
            <ul className="text-yellow-50">

              <h3 className="font-extrabold text-md uppercase text-white">Design Integration</h3>
              {item.design.map((res, y) => (
                <li className="my-4 text-base font-semibold capitalize" key={y}><a href={res.link} className="hover:underline">{res.title}</a></li>
              ))}
            </ul>
            <ul className="text-yellow-50">


              <h3 className="font-extrabold text-md uppercase text-white">Developer Integration</h3>
              {item.developer.map((res, y) => (
                <li className="my-4 text-base font-semibold capitalize" key={y}><a href={res.link} className="hover:underline">{res.title}</a></li>
              ))}
            </ul>
          </>
        ))}
      </div>
      <div className="min-h-[10vh] w-full">
        <div className="w-full flex text-2xl">
          <a href="https://twitter.com/"><FaTwitter className="text-blue-400 bg-white rounded-full w-[35px] h-[35px] p-1 mr-5 mb-4 hover:bg-slate-300 cursor-pointer" /></a>
          <a href="https://instagram.com/"><FaInstagram className="text-orange-700 bg-white rounded-full w-[35px] h-[35px] p-1 mr-5 mb-4 hover:bg-slate-300 cursor-pointer" /></a>
          <a href="https://slack.com/"><FaSlack className="text-orange-400 bg-white rounded-full w-[35px] h-[35px] p-1 mr-5 mb-4 hover:bg-slate-300 cursor-pointer" /></a>
          <a href="https://linkedin.com/"><FaLinkedin className="text-blue-500 bg-white rounded-full w-[35px] h-[35px] p-1 mr-5 mb-4 hover:bg-slate-300 cursor-pointer" /></a>
          <a href="https://youtube.com/"><FaYoutube className="text-red-700 bg-white rounded-full w-[35px] h-[35px] p-1 mr-5 mb-4 hover:bg-slate-300 cursor-pointer" /></a>
        </div>
        <h4 className="text-yellow-300 font-black text-lg font-mono uppercase">Made remotely with love by Stark Lab, Inc. Copyright 2023</h4>
      </div>
    </div>
  );
}

export default Footer;