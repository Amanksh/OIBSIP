import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.png";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contact"
      className="contact py-20 w-full h-screen flex items-center "
    >
      {/* HEADINGS */}
      <div className="w-[80%] bg-primary mx-auto flex flex-col items-center rounded-lg shadow-lg p-8 mt-5">
        <div className="flex flex-col justify-center items-center text-center sm:w-[50%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-center w-full"
          >
            <p className="font-sans font-bold border-b-4 border-btncolor text-3xl text-headColor text-center sm:mb-10">
              CONTACT ME
            </p>
          </motion.div>

          {/* FORM & IMAGE */}
          <div className=" gap-16 mt-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className=" mt-10 md:mt-0"
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/amankushwaha933@gmail.com"
                method="POST"
              >
                <input
                  className="w-full bg-para rounded-lg font-semibold placeholder-opaque-black p-3"
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="text-red mt-1">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}

                <input
                  className="w-full bg-para rounded-lg font-semibold placeholder-opaque-black p-3 mt-5"
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red mt-1">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}

                <textarea
                  className="w-full bg-para rounded-lg shadow-lg font-semibold placeholder-opaque-black p-3 mt-5"
                  name="message"
                  placeholder="MESSAGE"
                  rows="4"
                  cols="50"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="text-red mt-1">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}

                <button
                  className="p-5 bg-btncolor rounded-lg font-semibold text-primary mt-5 hover:bg-yellow hover:text-white transition duration-500"
                  type="submit"
                >
                  SEND ME A MESSAGE
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
