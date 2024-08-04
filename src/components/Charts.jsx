import { Chart } from 'react-google-charts'

const data = [
  ['Task', 'Hours per Day'],
  ['React', 10],
  ['React Native', 8],
  ['NodeJS', 8],
  ['UX/UI', 8],
  ['SQL', 4],
]

export const ChartInformation = () => {
  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8'>
      <Chart
        chartType='PieChart'
        data={data}
      />
    </div>
  )
}
