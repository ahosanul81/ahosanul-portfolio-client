import ContactForm from "./ContactForm";

const Contact = async () => {
  return (
    <div id="contact">
      <h1 className="text-center text-green-400 text-3xl font-bold">
        Contact Me
      </h1>
      <section className="bg-primary min-h-screen py-4 h-full flex items-center text-white px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Have You Any Project? <br />
              <span className="text-gray-300">Please Drop a Message</span>
            </h2>
            <p className="mt-4 text-gray-400">
              Get in touch and let me know how I can help. Fill out the form and
              {` I'll `}be in touch as soon as possible.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-xl text-gray-400">📍</span>
                <div>
                  <p className="font-semibold">Address:</p>
                  <p className="text-gray-400">
                    Cumilla, Chittagong, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-xl text-gray-400">📞</span>
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p className="text-gray-400">+8801990631429</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-xl text-gray-400">✉️</span>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-gray-400">ahosanul81@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              {[
                { name: "GitHub", icon: "🐙", color: "bg-neutral-950" },
                { name: "LinkedIn", icon: "💼", color: "bg-blue-900" },
                { name: "Facebook", icon: "📘", color: "bg-blue-700" },
                { name: "YouTube", icon: "▶️", color: "bg-red-800" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full ${social.color} text-neutral-200 hover:w-36 transition-all overflow-hidden`}
                >
                  <span className="hidden group-hover:inline whitespace-nowrap mr-2">
                    {social.name}
                  </span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
