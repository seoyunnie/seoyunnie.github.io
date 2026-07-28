import type { IconType } from "@icons-pack/react-simple-icons";
import { ActionIcon, type ActionIconProps, Tooltip, polymorphic } from "@mantine/core";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

interface HeaderControlProps extends Omit<ActionIconProps, "size" | "children" | "variant"> {
  "aria-label"?: string;
  icon: IconType | PhosphorIcon;
  tooltip: string;
}

const HeaderControl = polymorphic<"button", HeaderControlProps>(
  ({ "aria-label": ariaLabel, icon: Icon, tooltip, ...props }: Readonly<HeaderControlProps>) => (
    <Tooltip label={tooltip}>
      <ActionIcon
        {...props}
        aria-label={ariaLabel !== undefined && ariaLabel.length > 0 ? ariaLabel : tooltip}
        size="lg"
        variant="default"
      >
        <Icon size="1.5rem" />
      </ActionIcon>
    </Tooltip>
  ),
);
HeaderControl.displayName = "HeaderControl";

export { HeaderControl };
