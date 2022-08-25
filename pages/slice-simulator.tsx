import {
  SliceSimulator,
  SliceSimulatorProps,
} from '@prismicio/slice-simulator-react'
import state from '@slicemachine/libraries-state.json'
import Slices from '@components/slices/Slices'
import type SliceTypes from '@slices/sliceTypes'

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={({ slices }) => (
      <Slices slices={slices as unknown as SliceTypes[]} />
    )}
    state={state as unknown as SliceSimulatorProps['state']}
  />
)

export default SliceSimulatorPage
