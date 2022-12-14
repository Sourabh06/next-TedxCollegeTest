import Head from "next/head";

export default function Register() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>TEDxIIMRanchi Registration</title>
        <meta name="TEDxIIMRanchi official" content="TEDxIIMRanchi" />
        <link rel="icon" href="/logo-black.ico" />
      </Head>
      <div className="text-5xl justify-center gap-16 py-3 shadow-lg">
        <h1 className="text-center">Register here</h1>
      </div>
      <div className="m-2 p-4">
        <p className="text-lg ml-4">
          A world full of opportunities awaits. <br /> Submit the interest form
          to know more.
        </p>
        <form
          action="#"
          method="post"
          className="p-2 m-4 custom-box-shadow lg:w-[40%] text-center"
        >
          <input
            type="email"
            name="userMail"
            id="emailId"
            placeholder="Enter mail here"
            className="shadow-lg border-black border-1"
          />
          <button
            type="submit"
            className="border-black border-2 p-2 m-4 hover:bg-tedxred hover:text-white active:scale-95"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
