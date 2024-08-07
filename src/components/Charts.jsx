import { FaServer } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'

import RadarChart from 'react-svg-radar-chart'
import 'react-svg-radar-chart/build/css/index.css'

export const ChartInformation = () => {
  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8'>

      <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 self-center uppercase text-center mb-10'>
        Habilidades y tecnologías.
      </h1>

      <div className="gap-4 flex md:flex-row sm:flex-col justify-evenly">
        <div className='flex flex-col items-center gap-4'>
          <p className='text-2xl gap-2 text-gray-400 flex items-center justify-center'>
            <FaCode /> Frontend
          </p>

          <RadarChart
            captions={{
              React: 'React',
              Angular: 'Angular',
              Svelte: 'Svelte',
              Vue: 'Vue',
              Typescript: 'Typescript',
              WebSocket: 'Socket',
              Redux: 'Redux',
              Lodash: 'Lodash',
              Apollo: 'Apollo Client',
              Bootstrap: 'Bootstrap',
              MaterialUI: 'MUI X',
              Tailwind: 'Tailwind css',
              GoogleMaps: 'Google Maps Api',
            }}
            data={[
              {
                data: {
                  React: 0.95,
                  Angular: 0.3,
                  Svelte: 0.4,
                  Vue: 0.6,
                  Typescript: 0.8,
                  WebSocket: 0.8,
                  Redux: 0.8,
                  Lodash: 0.8,
                  Apollo: 0.6,
                  Bootstrap: 0.5,
                  MaterialUI: 0.5,
                  Tailwind: 0.5,
                  GoogleMaps: 0.7,
                },
                meta: { color: '#1f2937' }
              },
            ]}
            size={480}
          />
        </div>

        <div className='flex flex-col items-center gap-4'>
          <p className='text-2xl gap-2 text-gray-400 flex items-center justify-center'>
            <FaServer /> Backend
          </p>

          <RadarChart
            captions={{
              Node: 'NodeJs',
              Express: 'Express',
              Jwt: 'JWT',
              Auth0: 'Auth0',
              Socket: 'Socket.io',
              Sql: 'Sql',
              Sequalize: 'Sequalize',
              Graphql: 'Graphql',
              Prisma: 'Prisma',
            }}
            data={[
              // data
              {
                data: {
                  Node: 0.8,
                  Express: 0.85,
                  Jwt: 0.8,
                  Auth0: 0.7,
                  Socket: 0.8,
                  Sql: 0.5,
                  Sequalize: 0.7,
                  Graphql: 0.6,
                  Prisma: 0.4,
                },
                meta: { color: '#1f2937' }
              },
            ]}
            size={480}
          />
        </div>
      </div>
    </div>
  )
}
