function veronaSettings(props) {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            Verona ClockFace Settings
          </Text>
        }
      >
        <Text italic>Background</Text>
        <ColorSelect
          settingsKey="bgColor"
          colors={[
            { color: "#151515" },
            { color: "#000000" },
            { color: "#FFFFFF" },
            { color: "#FFD700" },
            { color: "#ADFF2F" },
            { color: "deepskyblue" },
            { color: "#F80070" }
          ]}
        />
        <Text italic>Hours</Text>
        <ColorSelect
          settingsKey="hoursColor"
          colors={[
            { color: "#7b68ee" },
            { color: "#949391" },
            { color: "#C8C8C8" },
            { color: "#FFFFFF" },
            { color: "tomato" },
            { color: "sandybrown" },
            { color: "#FFD700" },
            { color: "#ADFF2F" },
            { color: "deepskyblue" },
            { color: "plum" }
          ]}
        />
        <Text italic>Minutes</Text>
        <ColorSelect
          settingsKey="minutesColor"
          colors={[
            { color: "#9370db" },
            { color: "#949391" },
            { color: "#C8C8C8" },
            { color: "#FFFFFF" },
            { color: "tomato" },
            { color: "sandybrown" },
            { color: "#FFD700" },
            { color: "#ADFF2F" },
            { color: "deepskyblue" },
            { color: "plum" }
          ]}
        />
        <Text italic>Date / Seconds</Text>
        <ColorSelect
          settingsKey="additionalColor"
          colors={[
            { color: "#FFFFFF" },
            { color: "#9370db" },
            { color: "#949391" },
            { color: "#C8C8C8" },
            { color: "#31322e" },
            { color: "#1f3227" },
            { color: "#2a2d43" },
            { color: "#414361" },
            { color: "tomato" },
            { color: "sandybrown" },
            { color: "#FFD700" },
            { color: "#ADFF2F" },
            { color: "deepskyblue" },
            { color: "plum" }
          ]}
        />
        <Text italic>Stats</Text>
        <ColorSelect
          settingsKey="statsColor"
          colors={[
            { color: "#C8C8C8" },
            { color: "#949391" },
            { color: "#FFFFFF" },
            { color: "tomato" },
            { color: "sandybrown" },
            { color: "#FFD700" },
            { color: "#ADFF2F" },
            { color: "deepskyblue" },
            { color: "plum" }
          ]}
        />
        <Text italic>Icons</Text>
        <ColorSelect
          settingsKey="iconsColor"
          colors={[
            { color: "#949391" },
            { color: "#C8C8C8" },
            { color: "#FFFFFF" },
            { color: "tomato" },
            { color: "sandybrown" },
            { color: "#FFD700" },
            { color: "#ADFF2F" },
            { color: "deepskyblue" },
            { color: "plum" }
          ]}
        />
        <Text italic>Battery</Text>
        <ColorSelect
          settingsKey="batteryColor"
          colors={[
            { color: "#FFFFFF" },
            { color: "#949391" },
            { color: "#C8C8C8" },
            { color: "#000000" }
          ]}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(veronaSettings);
