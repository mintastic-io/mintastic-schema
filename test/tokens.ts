import {Token} from "../src";

class TokenImpl implements Token {
    private readonly token: string

    constructor(token: string) {
        this.token = token;
    }

    getAuthorization(): Promise<string> {
        return Promise.resolve(this.token);
    }

    getCreatorId(): string {
        return "83860f23-4b38-407d-a499-ef99bf8b6d42";
    }

    getGroups = () => [];
    getUsername = () => "";
    isExpired = () => false
    getPayload = () => ({})

}

export const JWT = new TokenImpl(
    "eyJraWQiOiJnSlBWekFaTGU2K3JHNXdxR0UwVlp1QTN6SER3OVc2TUp1YXJERXRtNTVjPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4Mzg2MGYyMy00YjM4LTQwN2QtYTQ5OS1lZjk5YmY4YjZkNDIiLCJhdWQiOiI1MzJsMmgzMmdyNW5iNDA0ZzBoYnZodWc4bCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImRkNGFmNzc0LTM4OWEtNGM3Yi1iY2NiLWI3YzI3MTAyNTNlNiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjIxMjg1NTIzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9DTGpVZWJIWVYiLCJjb2duaXRvOnVzZXJuYW1lIjoibWludGFzdGljLWRldiIsImV4cCI6MTYyMTI4OTEyMywiaWF0IjoxNjIxMjg1NTIzLCJlbWFpbCI6ImRldkBtaW50YXN0aWMuaW8ifQ.foZy_U3wPjWxaM23oJ0m2_arhHSiyuN2HA4LCfx-OJ0m_A7bxKYnH94gckQxrmlnmpgI0Vbmf1p841IbDF3anJbDB9x4TZq_vMXe4ogC6X4qAcMvelej852hPregsKWRckUspbZ3fv5VOlJljRvC7YPbSQhnh3rugINOXXVw5Nkwn5EVT2rRbZXGwxwWddrwUszWDQSgLYiK_QgVV3mkqRSwYkV6EjrfNtCTqgRDFqVAb_-SoKzUz6NVJuDYGjTW3plGrYc97U-uK_lcp2bvN9qiEaOWBCwfP48fry2kKnQHdZfJWL6jyDTQrzXVucqpYgYFBgQ2gWCshA1ZHB99EQ\",\"accessToken\":\"eyJraWQiOiI3UDRCQ0JcL2lBSDhmQmNQSHN2RkFGejIwSVorVjRLaDZJZ3lWMlE5UU9wMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4Mzg2MGYyMy00YjM4LTQwN2QtYTQ5OS1lZjk5YmY4YjZkNDIiLCJkZXZpY2Vfa2V5IjoiZXUtY2VudHJhbC0xX2RkMzZkMGE3LWMxNDYtNDY0OC04ZDliLTU4NTAzZWUwOWZkNiIsImV2ZW50X2lkIjoiZGQ0YWY3NzQtMzg5YS00YzdiLWJjY2ItYjdjMjcxMDI1M2U2IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTYyMTI4NTUyMywiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfQ0xqVWViSFlWIiwiZXhwIjoxNjIxMjg5MTIzLCJpYXQiOjE2MjEyODU1MjMsImp0aSI6IjFhMmI3MTY3LTM4MmQtNGEyYS1iOGNkLTliNTcxYWE1OWY2MSIsImNsaWVudF9pZCI6IjUzMmwyaDMyZ3I1bmI0MDRnMGhidmh1ZzhsIiwidXNlcm5hbWUiOiJtaW50YXN0aWMtZGV2In0.R0BSAGQK5vxnaIZ-A1j2jwnhJQ30EHn_xnPe0KS2Nzk6-cI532bUIjZV-hAKwk6a1J_16hmplB2CuFXBqqNo-3wEIp0Ey-7glljS84qUhZVMtJsfrGiFCDbxGCRoT78OBLaf9xye687XSWZC2ij9wBZs5QVAyFarU36S1fDGtyjt_Dp-ivrzGcQrWzTz3Q8MzcprFqzDVL_0hUyU6rrz0JSHX0maEJ4DmY-ZRDqpmZ7nVERRdwjTqqAkWGDAM4oX8mH1s06m_pnJh6Xcio8rr1iucoKDQFaANpbrKTO5EQfc_c8QpiGCsK8Ql8SS11iHi20nGFrG7l6lEfOIInv0yQ"
)