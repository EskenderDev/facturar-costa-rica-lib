import axios from 'axios'
import qs from 'querystring'
import {
  tokenStub,
  credentials,
  expectedResponseTokenStub,
  postTokenOptions,
  expectedPostConfig,
  expectedTokenUrl,
  postRefreshTokenOptions
} from '@test/stubs/token.stub'
import { ATV } from '@src/ATV'
import { GetToken } from '@src/services/getToken/GetToken'

jest.mock('axios')

describe('Get Token', () => {
  let atv: ATV
  let getToken: GetToken

  beforeEach(() => {
    atv = new ATV({}, 'stg')
    getToken = new GetToken(atv)
    ;(axios.post as jest.Mock).mockResolvedValue(tokenStub)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return a valid token', async () => {
    const token = await getToken.execute(credentials)
    expect(token).toEqual(expectedResponseTokenStub)
  })

  it('should refresh token and return a valid token', async () => {
    const token = await getToken.execute(credentials)
    const refreshToken = await getToken.refreshToken(token.refreshToken)

    expect(refreshToken).toEqual(expectedResponseTokenStub)
  })

  it('should call axios.post with correct parameters', async () => {
    const expectedData = qs.stringify(postTokenOptions)

    await getToken.execute(credentials)

    expect(axios.post).toHaveBeenCalledWith(expectedTokenUrl, expectedData, expectedPostConfig)
  })

  it('should refresh token call axios.post with correct parameters', async () => {
    const result = await getToken.execute(credentials)
    const expectedData = qs.stringify(postRefreshTokenOptions)

    await getToken.refreshToken(result.refreshToken)

    expect(axios.post).toHaveBeenLastCalledWith(expectedTokenUrl, expectedData, expectedPostConfig)
  })
})
