import Head from "next/head";

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Head>
        <title>Shutterstock Developer Portal</title>
        <meta name='description' content='Shutterstock Developer Portal' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex'>
        {/* Sidebar */}
        <aside className='w-64 bg-white shadow-md h-screen'>
          <div className='px-6 py-4'>
            <div className='text-xl font-bold text-red-500'>Shutterstock</div>
          </div>
          <nav className='mt-10'>
            <ul>
              <li>
                <a
                  href='#'
                  className='block px-6 py-2 text-gray-600 hover:bg-gray-200'
                >
                  <span className='font-medium'>Profile</span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-6 py-2 text-gray-600 hover:bg-gray-200'
                >
                  <span className='font-medium'>Plans</span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-6 py-2 text-gray-600 hover:bg-gray-200'
                >
                  <span className='font-medium'>Purchase history</span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-6 py-2 text-gray-600 hover:bg-gray-200'
                >
                  <span className='font-medium'>Connected Accounts</span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-6 py-2 text-gray-600 hover:bg-gray-200'
                >
                  <span className='font-medium'>Developers</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className='flex-1 flex items-center justify-center bg-white p-10'>
          <div className='text-center'>
            <h1 className='text-2xl font-bold text-gray-800 mb-4'>
              Build something exciting with Shutterstock
            </h1>
            <p className='text-gray-600 mb-6'>
              Enhance your applications using our API, Editor SDK, and more. For
              more information, see our{" "}
              <a href='#' className='text-blue-600 hover:underline'>
                Developer Portal
              </a>
              ,{" "}
              <a href='#' className='text-blue-600 hover:underline'>
                API documentation
              </a>
              , or{" "}
              <a href='#' className='text-blue-600 hover:underline'>
                Plans and Pricing
              </a>
            </p>
            <button className='bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600'>
              Create new app
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
