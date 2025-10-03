import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps as SonnerProps } from "sonner"
import { toastClassNames } from "./toastClassNames"

type ToasterComponentProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterComponentProps) => {
  const { theme } = useTheme()

  const currentTheme = theme === "system" ? "light" : theme

  return (
    <Sonner
      theme={currentTheme as SonnerProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: toastClassNames,
      }}
      {...props}
    />
  )
}

export { Toaster }
