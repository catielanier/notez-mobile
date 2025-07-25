// src/components/GameNotesSearch.tsx
import React, { useState, useEffect, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, useTheme } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import { useTranslation } from "react-i18next";

interface Selection {
  game: string;
  me: string;
  opp: string;
  filter: string;
}

interface Option {
  label: string;
  value: string;
}

interface Game {
  id: string;
  name: string;
  characters: { id: string; name: string }[];
  filters: { id: string; name: string }[];
}

interface Props {
  onSelect: (sel: Selection) => void;
}

const GameNotesSearch: React.FC<Props> = ({ onSelect }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  // master games list
  const games = t("games", { returnObjects: true }) as Game[];

  // selection state
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [selectedMe, setSelectedMe] = useState<string>("");
  const [selectedOpp, setSelectedOpp] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  // dynamic options
  const [charOptions, setCharOptions] = useState<Option[]>([]);
  const [filterOptions, setFilterOptions] = useState<Option[]>([]);

  // build game list
  const gameOptions = useMemo(
    () => games.map((g) => ({ label: g.name, value: g.id })),
    [games]
  );

  // when game changes, reset downstream
  useEffect(() => {
    if (!selectedGame) {
      setCharOptions([]);
      setFilterOptions([]);
      setSelectedMe("");
      setSelectedOpp("");
      setSelectedFilter("");
      onSelect({ game: "", me: "", opp: "", filter: "" });
      return;
    }
    const sel = games.find((g) => g.id === selectedGame);
    if (!sel) return;

    setCharOptions(sel.characters.map((c) => ({ label: c.name, value: c.id })));

    const common = t("notes.common.filters.games", { returnObjects: true }) as {
      id: string;
      name: string;
    }[];
    setFilterOptions(
      [...sel.filters, ...common].map((f) => ({ label: f.name, value: f.id }))
    );

    onSelect({ game: sel.id, me: "", opp: "", filter: "" });
  }, [selectedGame, games, t, onSelect]);

  // propagate any change
  useEffect(() => {
    onSelect({
      game: selectedGame,
      me: selectedMe,
      opp: selectedOpp,
      filter: selectedFilter,
    });
  }, [selectedGame, selectedMe, selectedOpp, selectedFilter, onSelect]);

  return (
    <View>
      <Dropdown
        label={t("notes.common.game")}
        mode="outlined"
        value={selectedGame}
        onSelect={(val) => setSelectedGame(val ?? "")}
        options={gameOptions}
        menuContentStyle={{ backgroundColor: theme.colors.surface }}
        menuUpIcon={<Text style={{ color: theme.colors.onSurface }}>▲</Text>}
        menuDownIcon={<Text style={{ color: theme.colors.onSurface }}>▼</Text>}
      />

      <Dropdown
        label={t("notes.character.you")}
        mode="outlined"
        value={selectedMe}
        onSelect={(val) => setSelectedMe(val ?? "")}
        options={charOptions}
        disabled={!selectedGame}
        menuContentStyle={{ backgroundColor: theme.colors.surface }}
        menuUpIcon={<Text style={{ color: theme.colors.onSurface }}>▲</Text>}
        menuDownIcon={<Text style={{ color: theme.colors.onSurface }}>▼</Text>}
      />

      <Dropdown
        label={t("notes.character.opponent")}
        mode="outlined"
        value={selectedOpp}
        onSelect={(val) => setSelectedOpp(val ?? "")}
        options={charOptions}
        disabled={!selectedGame}
        menuContentStyle={{ backgroundColor: theme.colors.surface }}
        menuUpIcon={<Text style={{ color: theme.colors.onSurface }}>▲</Text>}
        menuDownIcon={<Text style={{ color: theme.colors.onSurface }}>▼</Text>}
      />

      <Dropdown
        label={t("notes.filter.choose")}
        mode="outlined"
        value={selectedFilter}
        onSelect={(val) => setSelectedFilter(val ?? "")}
        options={filterOptions}
        disabled={!selectedGame}
        menuContentStyle={{ backgroundColor: theme.colors.surface }}
        menuUpIcon={<Text style={{ color: theme.colors.onSurface }}>▲</Text>}
        menuDownIcon={<Text style={{ color: theme.colors.onSurface }}>▼</Text>}
      />

      {selectedFilter !== "" && (
        <Button
          mode="outlined"
          onPress={() => setSelectedFilter("")}
          style={styles.clearButton}
          textColor={theme.colors.secondary}
        >
          {t("notes.filter.clear")}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginBottom: 16,
  },
  clearButton: {
    marginTop: 8,
  },
});

export default GameNotesSearch;
