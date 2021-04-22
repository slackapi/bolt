import { Option } from '@slack/types';
import { StringIndexed, XOR } from '../helpers';
import { AckFn } from '../utilities';

/**
 * Arguments which listeners and middleware receive to process an options request from Slack
 */
export interface SlackOptionsMiddlewareArgs<Source extends OptionsSource = OptionsSource> {
  payload: OptionsRequest<Source>;
  body: this['payload'];
  options: this['payload'];
  ack: OptionsAckFn<Source>;
}

/**
 * A request for options for a select menu with an external data source, wrapped in the standard metadata. The menu
 * can have a source of Slack's Block Kit external select elements, dialogs, or legacy interactive components.
 *
 * This describes the entire JSON-encoded body of a request.
 */
export interface OptionsRequest<Source extends OptionsSource = OptionsSource> extends StringIndexed {
  value: string;
  type: Source;
  team: {
    id: string;
    domain: string;
    enterprise_id?: string; // undocumented
    enterprise_name?: string; // undocumented
  } | null;
  channel?: {
    id: string;
    name: string;
  };
  user: {
    id: string;
    name: string;
    team_id?: string; // undocumented
  };
  token: string;

  // this appears in the block_suggestions schema, but we're not sure when its present or what its type would be
  app_unfurl?: any;

  // exists for enterprise installs
  is_enterprise_install?: boolean;
  enterprise?: {
    id: string;
    name: string;
  };
}
export interface BlockOptionsRequest extends OptionsRequest<'block_suggestion'> {
  api_app_id: string;
  action_id: string;
  block_id: string;
  container: StringIndexed;
}
export interface DialogOptionsRequest extends OptionsRequest<'dialog_suggestion'> {
  name: string;
  callback_id: string;
  action_ts: string;
}
export interface MessageOptionsRequest extends OptionsRequest<'interactive_message'> {
  name: string;
  callback_id: string;
  action_ts: string;
  message_ts: string;
  attachment_id: string;
}

/**
 * All sources from which Slack sends options requests.
 */
export type OptionsSource = 'interactive_message' | 'dialog_suggestion' | 'block_suggestion';

/**
 * Type function which given an options source `Source` returns a corresponding type for the `ack()` function. The
 * function is used to fulfill the options request from a listener or middleware.
 */
type OptionsAckFn<Source extends OptionsSource> = Source extends 'block_suggestion'
  ? AckFn<XOR<BlockOptions, OptionGroups<BlockOptions>>>
  : Source extends 'interactive_message'
  ? AckFn<XOR<MessageOptions, OptionGroups<MessageOptions>>>
  : AckFn<XOR<DialogOptions, OptionGroups<DialogOptions>>>;

export interface BlockOptions {
  options: Option[];
}
export interface MessageOptions {
  options: {
    text: string;
    value: string;
  }[];
}
export interface DialogOptions {
  options: {
    label: string;
    value: string;
  }[];
}
export interface OptionGroups<Options> {
  option_groups: ({
    label: string;
  } & Options)[];
}
