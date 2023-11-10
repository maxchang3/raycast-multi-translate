import { Action, ActionPanel, Icon, List } from '@raycast/api'
export function DefineItem({ defined }: { defined: string }) {

  const padding = ''
  let markdown = `###### ${padding}Defined\n\n${padding}${defined.split(" | ").join("\n\n")}`
  return (
    <List.Item
      key="define"
      id="define"
      icon={{
        value: Icon.Binoculars,
        tooltip: 'Define',
      }}
      title={defined}
      detail={<List.Item.Detail  markdown={markdown} />}
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.CopyToClipboard title="Copy" content={defined} />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  )
}
