type YesNoMaybe = 'Y' | 'N' | 'Maybe'

type GeneralCategory = "Screen Sharing/Communication" |
    "Not made for pairing" |
    "No low latency remote control" |
    "Good and require fast network" |
    "No full screen share" |
    "Not necessarily looking at same thing" |
    "Collaborative Editor"

export type PairProgrammingTool = {
  "Name": string,
  "Requires Good VPN": YesNoMaybe,
  "Requires Fast Network": YesNoMaybe,
  "Full Screen Sharing": YesNoMaybe,
  "Each Person Has Own Cursor": YesNoMaybe | "Maybe - Collaborative Editor",
  "Allows Annotation": YesNoMaybe,
  "Allows Control of Other Computer": YesNoMaybe,
  "Can Be Installed On Site - Info Stays Within Corporate Network": YesNoMaybe,
  "Audio/Video/Screen Share": YesNoMaybe,
  "General Category": GeneralCategory[],
}