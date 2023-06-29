"use client"
import { Input } from "@/components/ui/input"
import { useMemo, useState } from "react"

export default function IndexPage() {
const [velocity, setVelocity] = useState<number>()
const [angle, setAngle] = useState<number>()
const [g, setG] = useState<number>()

const getProjectileRange = () => {
if (!velocity || !angle || !g) {
  return
}
 
  const rad = angle * (Math.PI / 180);
    const range = ((velocity**2)*Math.sin(2*rad))/g;
    return range.toFixed(3);
}

const range = useMemo(() => getProjectileRange(), [g, velocity, angle])

  return (
 <section className="flex flex-col items-center gap-4 w-[24rem] mx-8 mt-8">



<Input placeholder="Gravity (in m/s^2)" value={g} type="number" onChange={(e) => setG(Number(e.target.value))} />
<Input placeholder="Velocity (in m/s)" value={velocity} type="number" onChange={(e) => setVelocity(Number(e.target.value))} />
<Input placeholder="Angle (in degrees)" value={angle} type="number" onChange={(e) =>  setAngle(Number(e.target.value))} /> 

  {range ? (
    <p>Range: {range}</p>
  ) : (
    <p>Please provide a value for all the 3 fields</p>
  )}








   </section>
  )
}
