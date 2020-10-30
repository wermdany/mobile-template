/**
 * 请求头
 */
export const headers = {
  "Content-Type": "application/javascript; charset=UTF-8"
};
/**
 * 请求超时时间
 */
export const timeout = 5000;

/**
 * restful 状态码
 * 决定
 * axios 拦截器 是进入 resolve 还是 reject
 */
export const validateStatus = function(status) {
  return status >= 200 && status < 300;
};

/**
 * RSA 加密 公钥
 */
export const RSA_PUBLIC_KEY = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDWxDfTMZhwdceBHBhHW8rD5EZv
8HB4DZFOvI2GVFPCfIjBiKM+1iu2EawjHrd7m4V2NyZKJGtcjz+BRP8vgoM9jp3u
Iu7KJR0xf2gZQ54p8/6FTAUQ8OCLp/XBpWPhXbKbhlYKIEKAg+AJT+wYq2qiXxq8
G4WbaKLrA5AD+rWMQwIDAQAB
-----END PUBLIC KEY-----
`;

export const RSA_PRIVATE_KEY = `
-----BEGIN PRIVATE KEY-----
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBANbEN9MxmHB1x4Ec
GEdbysPkRm/wcHgNkU68jYZUU8J8iMGIoz7WK7YRrCMet3ubhXY3Jkoka1yPP4FE
/y+Cgz2One4i7solHTF/aBlDninz/oVMBRDw4Iun9cGlY+FdspuGVgogQoCD4AlP
7BiraqJfGrwbhZtoousDkAP6tYxDAgMBAAECgYByGk/aifgGj9zOEKIpj3A8AVUW
9fSbJAI2heDfJIBXzRhPUowAv4L7uYnuIsyzBF60/vn93DmaNJU11fWKRVn56kD4
Fl3p2NBFnTHFtyVKJB4JObWSQFvb6RfIeBQoPuu+tkDq1diUNK/XzGcQZcc3ZFhE
irrTbCk3dZ2FQpPbAQJBAPFFb5nC9vafJ1fkIgE6LH6ZKi/v9GfLl6YoSpBSqPBV
jnpyAOWmklR5dWyhaxEWXpGCfXQ/56BQbLiXR/DG9IECQQDj4JF68cjD8RuEX07T
b9cCp421zHTM6dZVXwWjH7tCzRDp7QM3bCl+iIFI4wyAD+yFDU8bnq3EtwRRvkUX
qk7DAkBBnF5S9B/wxSsPzawppUZATyqXyqsuJsFgoAhW4wOqB7otNh9kVD3q1vTF
y8ev5+NjspanLFGy2OwX7pvTsGcBAkEAiBpt6deViOpt+/8Mzp5i9jPrIOVP8b/M
g0rwzAA80WY3rvAf1q9kjS2swkLSCX75TnKniCCbOv3wt34EOGFBDwJBAOFbNdRw
QgjuPtToIM374v37Ts9GAvcQM1v/BJMy3objRmVa7+EVZwnDnoPZU+4T+QaZ1TEQ
Up8JfdcDhM0rhY0=
-----END PRIVATE KEY-----
`;
