type ToFrom = {
  to: string
  from: string
}

type Transform = {
  args: ToFrom[] | string
  name?: string
}

export type TransformStep = {
  type: string,
  data: Transform
}

type Perform = {
  fn: string
  args: any[]
}

export type PerformStep = {
  type: string,
  data: Perform
}

export type Step = TransformStep | PerformStep;
