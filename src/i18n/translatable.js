import importAll from "@/components/core/globales";

// Auto import statically translation files

// Those js and json files follow a naming convention.
// They can be found under "./translatable".

// When they are immediate children of "translatable" folder,
// their name will be used as record keys.

// The auto importer will look for files named "index" when
// located in a subdirectory, thus those files will be named
// after the directory they are in.

// Names should respect the ISO 639-1 standard and can be
// completed with ISO 3166-1 alpha-2 codes after a hyphen.
// e.g. fr, fr-fr, fr-be, en-uk, en-us, de, it

export default importAll(
	require.context("@/i18n/translations", true, /(?:index|[a-zA-Z]{2}(?:-[a-zA-Z]{2})?)\.js(?:on)?$/),
	null,
	filename => filename
		.toLowerCase()
		.replace(/(?:\/_index)?\.\w+$/, "")
		.split("/")
		.pop(),
);