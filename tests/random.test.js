import { chance } from '../mocks/chance'
import {
  randomByte,
  randomCity,
  randomCountryCode,
  randomCountryName,
  randomDigits,
  randomEmail,
  randomGuid,
  randomHexColor,
  randomIban,
  randomInt,
  randomIntCustomRange,
  randomIP,
  randomIPv6,
  randomLetters,
  randomLettersDigits,
  randomLong,
  randomLowercaseLetters,
  randomLowercaseLettersDigits,
  randomName,
  randomPhoneNumber,
  randomRegEx,
  randomRgbColor,
  randomSample,
  randomShort,
  randomStreetAddress,
  randomUppercaseLetters,
  randomUppercaseLettersDigits,
  randomUrl,
} from '../src/random'

describe('>>>>> Random Generators Tests', () => {
  describe('.randomByte', () => {
    beforeEach(() => {
      chance.natural.mockClear()
    })

    it('calls the lib natural function with the correct max param', () => {
      randomByte({ chance })

      expect(chance.natural).toBeCalledWith({ max: 255 })
    })

    it('returns a string', () => {
      const random = randomByte({ chance })

      expect(typeof random === 'string').toBeTruthy()
    })
  })

  describe('.randomShort', () => {
    beforeEach(() => {
      chance.natural.mockClear()
    })

    it('calls the lib natural function with the correct max param', () => {
      randomShort({ chance })

      expect(chance.natural).toBeCalledWith({ max: 65535 })
    })

    it('returns a string', () => {
      const random = randomShort({ chance })

      expect(typeof random === 'string').toBeTruthy()
    })
  })

  describe('.randomInt', () => {
    beforeEach(() => {
      chance.natural.mockClear()
    })

    it('calls the lib natural function with the correct max param', () => {
      randomInt({ chance })

      expect(chance.natural).toBeCalledWith({ max: 4294967295 })
    })

    it('returns a string', () => {
      const random = randomInt({ chance })

      expect(typeof random === 'string').toBeTruthy()
    })
  })

  describe('.randomLong', () => {
    beforeEach(() => {
      chance.natural.mockClear()
    })

    it('calls the lib natural function with the correct max param', () => {
      randomLong({ chance })

      expect(chance.natural).toBeCalled()
    })

    it('returns a string', () => {
      const random = randomLong({ chance })

      expect(typeof random === 'string').toBeTruthy()
    })
  })

  describe('.randomIntCustomRange', () => {
    beforeEach(() => {
      chance.natural.mockClear()
    })

    it('calls the lib natural function with the correct min and max params', () => {
      randomIntCustomRange({ chance, inputValue: '26-8989' })

      expect(chance.natural).toBeCalledWith({ min: 26, max: 8989 })
    })

    it('returns a string', () => {
      const random = randomIntCustomRange({ chance, inputValue: '26-8989' })

      expect(typeof random === 'string').toBeTruthy()
    })
  })

  describe('.randomGuid', () => {
    beforeEach(() => {
      chance.guid.mockClear()
    })

    it('calls the lib guid function', () => {
      randomGuid({ chance })

      expect(chance.guid).toBeCalled()
    })
  })

  describe('.randomLetters', () => {
    beforeEach(() => {
      chance.string.mockClear()
    })

    it('calls the lib string function with the correct default length', () => {
      randomLetters({ chance })

      expect(chance.string).toBeCalledWith({ length: 10, alpha: true })
    })

    it('calls the lib string function with the correct length param', () => {
      randomLetters({ chance, inputValue: 32 })

      expect(chance.string).toBeCalledWith({ length: 32, alpha: true })
    })
  })

  describe('.randomDigits', () => {
    beforeEach(() => {
      chance.string.mockClear()
    })

    it('calls the lib string function with the correct default length', () => {
      randomDigits({ chance })

      expect(chance.string).toBeCalledWith({ length: 10, numeric: true })
    })

    it('calls the lib string function with the correct length param', () => {
      randomDigits({ chance, inputValue: 32 })

      expect(chance.string).toBeCalledWith({ length: 32, numeric: true })
    })
  })

  describe('.randomLettersDigits', () => {
    beforeEach(() => {
      chance.string.mockClear()
    })

    it('calls the lib string function with the correct default length', () => {
      randomLettersDigits({ chance })

      expect(chance.string).toBeCalledWith({ length: 10, alpha: true, numeric: true })
    })

    it('calls the lib string function with the correct length param', () => {
      randomLettersDigits({ chance, inputValue: 32 })

      expect(chance.string).toBeCalledWith({ length: 32, alpha: true, numeric: true })
    })
  })

  describe('.randomLowercaseLetters', () => {
    beforeEach(() => {
      chance.string.mockClear()
    })

    it('calls the lib string function with the correct default length', () => {
      randomLowercaseLetters({ chance })

      expect(chance.string).toBeCalledWith({ length: 10, alpha: true, casing: 'lower' })
    })

    it('calls the lib string function with the correct length param', () => {
      randomLowercaseLetters({ chance, inputValue: 32 })

      expect(chance.string).toBeCalledWith({ length: 32, alpha: true, casing: 'lower' })
    })
  })

  describe('.randomLowercaseLettersDigits', () => {
    beforeEach(() => {
      chance.string.mockClear()
    })

    it('calls the lib string function with the correct default length', () => {
      randomLowercaseLettersDigits({ chance })

      expect(chance.string).toBeCalledWith({
        length: 10,
        alpha: true,
        numeric: true,
        casing: 'lower',
      })
    })

    it('calls the lib string function with the correct length param', () => {
      randomLowercaseLettersDigits({ chance, inputValue: 32 })

      expect(chance.string).toBeCalledWith({
        length: 32,
        alpha: true,
        numeric: true,
        casing: 'lower',
      })
    })
  })

  describe('.randomUppercaseLetters', () => {
    beforeEach(() => {
      chance.string.mockClear()
    })

    it('calls the lib string function with the correct default length', () => {
      randomUppercaseLetters({ chance })

      expect(chance.string).toBeCalledWith({
        length: 10,
        alpha: true,
        casing: 'upper',
      })
    })

    it('calls the lib string function with the correct length param', () => {
      randomUppercaseLetters({ chance, inputValue: 32 })

      expect(chance.string).toBeCalledWith({
        length: 32,
        alpha: true,
        casing: 'upper',
      })
    })
  })

  describe('.randomUppercaseLettersDigits', () => {
    beforeEach(() => {
      chance.string.mockClear()
    })

    it('calls the lib string function with the correct default length', () => {
      randomUppercaseLettersDigits({ chance })

      expect(chance.string).toBeCalledWith({
        length: 10,
        alpha: true,
        numeric: true,
        casing: 'upper',
      })
    })

    it('calls the lib string function with the correct length param', () => {
      randomUppercaseLettersDigits({ chance, inputValue: 32 })

      expect(chance.string).toBeCalledWith({
        length: 32,
        alpha: true,
        numeric: true,
        casing: 'upper',
      })
    })
  })

  describe('.randomSample', () => {
    beforeEach(() => {
      chance.natural.mockClear()
    })

    it('calls the lib natural function with the correct limit', () => {
      randomSample({ chance })

      expect(chance.natural).toBeCalledWith({ max: 2 })
    })

    it('returns a random sample from the comma-delimited set', () => {
      const inputValue = 'One,Two 2,Three-b, four '
      chance.natural.mockReturnValue(1)
      expect(randomSample({ chance, inputValue })).toEqual('Two 2')
      chance.natural.mockReturnValue(3)
      expect(randomSample({ chance, inputValue })).toEqual(' four ')
    })
  })

  describe('.randomName', () => {
    beforeEach(() => {
      chance.name.mockClear()
    })

    it('calls the lib name function', () => {
      randomName({ chance })

      expect(chance.name).toBeCalled()
    })
  })

  describe('.randomStreetAddress', () => {
    beforeEach(() => {
      chance.address.mockClear()
    })

    it('calls the lib address function', () => {
      randomStreetAddress({ chance })

      expect(chance.address).toBeCalled()
    })
  })

  describe('.randomCity', () => {
    beforeEach(() => {
      chance.city.mockClear()
    })

    it('calls the lib city function', () => {
      randomCity({ chance })

      expect(chance.city).toBeCalled()
    })
  })

  describe('.randomCountryCode', () => {
    beforeEach(() => {
      chance.country.mockClear()
    })

    it('calls the lib country function', () => {
      randomCountryCode({ chance })

      expect(chance.country).toBeCalled()
    })
  })

  describe('.randomCountry', () => {
    beforeEach(() => {
      chance.country.mockClear()
    })

    it('calls the lib country function with option to display a full country name', () => {
      randomCountryName({ chance })

      expect(chance.country).toBeCalledWith({ full: true })
    })
  })

  describe('.randomPhoneNumber', () => {
    beforeEach(() => {
      chance.phone.mockClear()
    })

    it('calls the lib phone function', () => {
      randomPhoneNumber({ chance })

      expect(chance.phone).toBeCalled()
    })
  })

  describe('.randomEmail', () => {
    beforeEach(() => {
      chance.email.mockClear()
    })

    it('calls the lib email function', () => {
      randomEmail({ chance })

      expect(chance.email).toBeCalled()
    })
  })

  describe('.randomIP', () => {
    beforeEach(() => {
      chance.ip.mockClear()
    })

    it('calls the lib ip function', () => {
      randomIP({ chance })

      expect(chance.ip).toBeCalled()
    })
  })

  describe('.randomIPv6', () => {
    beforeEach(() => {
      chance.ipv6.mockClear()
    })

    it('calls the lib ipv6 function', () => {
      randomIPv6({ chance })

      expect(chance.ipv6).toBeCalled()
    })
  })

  describe('.randomUrl', () => {
    beforeEach(() => {
      chance.url.mockClear()
    })

    it('calls the lib url function', () => {
      randomUrl({ chance })

      expect(chance.url).toBeCalled()
    })
  })

  describe('.randomHexColor', () => {
    beforeEach(() => {
      chance.color.mockClear()
    })

    it('calls the lib color function with hex format', () => {
      randomHexColor({ chance })

      expect(chance.color).toBeCalledWith({ format: 'hex', casing: 'upper' })
    })
  })

  describe('.randomRgbColor', () => {
    beforeEach(() => {
      chance.color.mockClear()
    })

    it('calls the lib color function with rgb format', () => {
      randomRgbColor({ chance })

      expect(chance.color).toBeCalledWith({ format: 'rgb' })
    })
  })

  describe('.randomIban', () => {
    beforeEach(() => {
      chance.iban.mockClear()
    })

    it('calls the lib iban function', () => {
      randomIban({ chance })

      expect(chance.iban).toBeCalled()
    })
  })

  describe('.randomRegEx', () => {
    it('random by regular expression', () => {
      const regEx = /[a-zA-Z0-9]{10,12}-\d{10}/
      const randomString = randomRegEx({ inputValue: regEx.toString() })

      expect(randomString).toMatch(regEx)
    })
  })
})
