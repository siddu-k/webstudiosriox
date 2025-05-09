import {
  CollapsibleIcon,
  TriggerIcon,
  ContentIcon,
} from "@webstudio-is/icons/svg";
import type { WsComponentMeta, WsComponentPropsMeta } from "@webstudio-is/sdk";
import { div } from "@webstudio-is/sdk/normalize.css";
import { radix } from "./shared/meta";
import {
  propsCollapsible,
  propsCollapsibleContent,
  propsCollapsibleTrigger,
} from "./__generated__/collapsible.props";

export const metaCollapsible: WsComponentMeta = {
  type: "container",
  constraints: [
    {
      relation: "descendant",
      component: { $eq: radix.CollapsibleTrigger },
    },
    {
      relation: "descendant",
      component: { $eq: radix.CollapsibleContent },
    },
  ],
  presetStyle: {
    div,
  },
  icon: CollapsibleIcon,
};

export const metaCollapsibleTrigger: WsComponentMeta = {
  type: "container",
  icon: TriggerIcon,
  constraints: {
    relation: "ancestor",
    component: { $eq: radix.Collapsible },
  },
};

export const metaCollapsibleContent: WsComponentMeta = {
  type: "container",
  presetStyle: {
    div,
  },
  icon: ContentIcon,
  constraints: {
    relation: "ancestor",
    component: { $eq: radix.Collapsible },
  },
};

export const propsMetaCollapsible: WsComponentPropsMeta = {
  props: {
    ...propsCollapsible,
    onOpenChange: {
      type: "action",
      control: "action",
      required: false,
    },
  },
  initialProps: ["open", "onOpenChange"],
};

export const propsMetaCollapsibleTrigger: WsComponentPropsMeta = {
  props: propsCollapsibleTrigger,
};

export const propsMetaCollapsibleContent: WsComponentPropsMeta = {
  props: propsCollapsibleContent,
};
