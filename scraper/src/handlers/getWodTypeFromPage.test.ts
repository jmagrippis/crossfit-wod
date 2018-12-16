import { getWodTypeFromContent } from './getWodTypeFromPage'

describe('getWodTypeFromContent', () => {
  it('returns `rest` for content indicating a Rest Day', () => {
    const content = `rest day

    "students stop soda" - crossfit journal [article]

    see we built this box to understand the truth about occupational licensure. the site provides resources and up-to-date information on current legislation and how crossfitters can get involved.`

    const type = getWodTypeFromContent(content)

    expect(type).toBe('rest')
  })

  it('returns `time` for content indicating a workout for time', () => {
    const content = `5 rounds for time of:
    400-m run
    10 overhead squats

    men: 135 lb.
    women: 95 lb.

    scroll for scaling options.
    post time to comments.



    related content:
    • the overhead squat



    scaling
    a variation on the benchmark nancy, this wod uses heavier loads and fewer reps to deliver almost the same amount of volume as the classic girl workout. even with heavier barbells, this is a conditioning workout, not a strength test. reduce the load so you can perform an appropriate number of relatively heavy overhead squats unbroken or in no more than 2 sets.

    intermediate option
    5 rounds for time of:
    400-m run
    10 overhead squats

    men: 95 lb.
    women: 65 lb.

    beginner option
    4 rounds for time of:
    400-m jog
    7 overhead squats

    men: 65 lb.
    women: 35 lb.`

    const type = getWodTypeFromContent(content)

    expect(type).toBe('time')
  })

  it('returns `loads` for content indicating a workout for max loads', () => {
    const content = `deadlift 10-10-10-10-10 reps

    scroll for scaling options.
    post loads to comments.

    compare to 150211.



    related content:
    • simplifying the deadlift with coach glassman
    • the deadlift



    scaling
    athletes of all levels can perform this deadlift workout designed to test strength endurance in 10-rep sets followed by adequate recovery. ideally, each set will be as heavy as possible for 10 reps, but newer athletes should start light and add weight as they are comfortable. for those athletes, the early sets can be used to drill mechanics as they build toward heavier final sets that challenge strength.`

    const type = getWodTypeFromContent(content)

    expect(type).toBe('loads')
  })

  it('returns `rounds` for content indicating a workout for rounds completed', () => {
    const content = `complete as many rounds as possible in 12 minutes of:
    20 ghd sit-ups
    5 strict muscle-ups

    scroll for scaling options.
    post rounds completed to comments.



    related content:
    • the ghd sit-up
    • the strict muscle-up



    scaling
    despite the volume of ghd sit-ups and the strength required for strict muscle-ups, experienced athletes will still be able to work at a pace that challenges conditioning. newer athletes might be able to use the ghd but should be cautious about doing too many reps if they blaze through the muscle-up modifications.

    intermediate option
    complete as many rounds as possible in 12 minutes of:
    15 ghd sit-ups
    5 assisted muscle-ups

    beginner option
    complete as many rounds as possible in 12 minutes of:
    15 sit-ups
    5 assisted pull-ups
    5 assisted dips`

    const type = getWodTypeFromContent(content)

    expect(type).toBe('rounds')
  })
})
