const $primary = '#EA5D60';
const $secondary = '#F2F2F2';
const $white = '#ffffff';
const $black = '#17171B';
const $grey = '#747476';
const $textWhite = $white;
const $textBlack = $black;
const $textGrey = $grey;
const $defaultInput = $secondary;
const $pressedInput = '#E2E2E2';

const defaultSpacing = 0.625;

export default {
  fonts: {
    '$font-primary': 'SF Display',
  },
  colors: {
    '$type-bug': '#8CB330',
    '$type-dark': '#58575F',
    '$type-dragon': '#0F6AC0',
    '$type-electric': '#EED535',
    '$type-fairy': '#ED6EC7',
    '$type-fighting': '#D04164',
    '$type-fire': '#FD7D24',
    '$type-flying': '#748FC9',
    '$type-ghost': '#556AAE',
    '$type-grass': '#62B957',
    '$type-ground': '#DD7748',
    '$type-ice': '#61CEC0',
    '$type-normal': '#9DA0AA',
    '$type-poison': '#A552CC',
    '$type-psychic': '#EA5D60',
    '$type-rock': '#BAAB82',
    '$type-steel': '#417D9A',
    '$type-watter': '#4A90DA',
    '$background-default': $white,
    '$background-type-bug': '#8BD674',
    '$background-type-dark': '#6F6E78',
    '$background-type-dragon': '#7383B9',
    '$background-type-electric': '#F2CB55',
    '$background-type-fairy': '#EBA8C3',
    '$background-type-fighting': '#EB4971',
    '$background-type-fire': '#FFA756',
    '$background-type-flying': '#83A2E3',
    '$background-type-ghost': '#8571BE',
    '$background-type-grass': '#8BBE8A',
    '$background-type-ground': '#F78551',
    '$background-type-ice': '#91D8DF',
    '$background-type-normal': '#B5B9C4',
    '$background-type-poison': '#9F6E97',
    '$background-type-psychic': '#FF6568',
    '$background-type-rock': '#D4C294',
    '$background-type-steel': '#4C91B3',
    '$background-type-watter': '#58ABF6',
    '$background-white': $white,
    '$background-default-input': $defaultInput,
    '$background-pressed-input': $pressedInput,
    '$background-modal': 'rgba(0, 0, 0, 0.25)',
    '$gradient-vetor': 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
    '$gradient-pokeball': 'linear-gradient(180deg, #F5F5F5 50%, #FFFFFF 94.81%)',
    '$gradient-vetor-grey': 'linear-gradient(115.06deg, #E5E5E5 0%, rgba(245, 245, 245, 0) 100%)',
    '$gradient-pokeball-grey': 'linear-gradient(158.2deg, #ECECEC 0%, #F5F5F5 100%)',
    '$gradient-vector-white': 'linear-gradient(115.57deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
    '$gradient-pokeball-white': 'linear-gradient(158.2deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
    '$gradient-pokemon-name': 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 76.04%)',
    '$gradient-pokemon-circle': 'linear-gradient(349.24deg, rgba(255, 255, 255, 0.35) 16.24%, rgba(255, 255, 255, 0) 44.6%)',
    '$text-field-default-background': $defaultInput,
    '$text-field-default-text': $textGrey,
    '$text-field-default-placeholder': $textGrey,
    '$text-field-default-icon': $textGrey,
    '$text-field-focused-background': $pressedInput,
    '$text-field-focused-text': $textBlack,
    '$text-field-focused-placeholder': $textGrey,
    '$text-field-focused-cursor': $primary,
    '$text-field-focused-icon': $textGrey,
    '$text-white': $textWhite,
    '$text-black': $textBlack,
    '$text-grey': $textGrey,
    '$text-number': 'rgba(23, 23, 27, 0.6)',
    '$height-hShort': '#FFC5E6',
    '$height-hMedium': '#AEBFD7',
    '$height-hTall': '#AAACB8',
    '$weight-wLight': '#99CD7C',
    '$weight-wNormal': '#57B2DC',
    '$weight-wHeavy': '#5A92A5',
  },
  spacing: {
    '$half-spacing': `${defaultSpacing / 2}rem`,
    '$default-spacing': `${defaultSpacing}rem`,
    '$section-margin': `${defaultSpacing * 2}rem`,
    '$container-padding': `${defaultSpacing * 4}rem`,
    '$paragraph-spacing': `${defaultSpacing}rem`,
    '$input-radius': `${defaultSpacing}rem`,
  },
  transitions: {
    '$default-transition': 'all .2s ease-out',
  },
};
