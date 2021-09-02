import { writable } from "svelte/store";

export const selectedPersonGroups = writable([]);
export const selectedPersonRoles = writable([]);
export const xmlJson = writable({});
export const rssData = writable(null);
export const editingEpisode = writable(null);
export const editingEpisodesList = writable([]);
export const useRSS = writable(false);
export const showNotesPane = writable();
export const rightPane = writable("showNotes");
export const player = writable(null);
export const editingPodcast = writable(null);
export const blankPerson = {
  "#text": "",
  "@_href": "",
  "@_img": "",
  "@_group": "cast",
  "@_role": "host",
};
