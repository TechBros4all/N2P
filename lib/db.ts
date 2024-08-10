import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT || "5432", 10),
  database: process.env.DATABASE_NAME,
  ssl:
    process.env.DATABASE_SSL === "true"
      ? {
          rejectUnauthorized: true,
          ca: `-----BEGIN CERTIFICATE-----
    MIIEQTCCAqmgAwIBAgIUUjfNloWJ15Wl0sIaSMC5QRSEMQowDQYJKoZIhvcNAQEM
    BQAwOjE4MDYGA1UEAwwvMzVlOWFkNzYtMDQ0My00ZTY0LWE5MmQtMWNiZGMyZjc3
    YjEyIFByb2plY3QgQ0EwHhcNMjQwODA5MjIwMTA2WhcNMzQwODA3MjIwMTA2WjA6
    MTgwNgYDVQQDDC8zNWU5YWQ3Ni0wNDQzLTRlNjQtYTkyZC0xY2JkYzJmNzdiMTIg
    UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALt1Ofzr
    CDVLDinK9HGmBRZhETPjkwgfwpku4x8A6lR+8Ce7oz1E4w8NzbxxTwMqgC8vA9e/
    dLi/8nVQ2nhe9tsOUHA71Em+izxbVqqyUpFnnlHN1hcDUEJW584HE95jj9jLVcNK
    PVKiu4sTxiWG1NHZvg9NHXbhrPqCC0mth5ho5Ao9g5biBmIaoXAkrWmaOyty2/zj
    1j54pGzpbW3VtjMiOwa96s0NuisH2RzeP+iEUIV1nWqVhVnoxEZVdRXzg9msWFmz
    XjDzMg8ems1VPPtk2bG/cs+THyC3fCxf+f7fzHvROVhyVLZr4BFGvVpr6H1WrwbA
    +bfEmfAxATjjOoC3GI+CmtsDaW96WzA2afa1WTWn/zqI3+kcYTA7yvgiLwSgvC+d
    ODJiTSZ2TZSVSnKeKo8NDB/2m4BXQfUFWLa2HOGbmAFBqKItjSbkvc9SpwOVRDSL
    3rZbwrTW0KpxQOynb3TKzFK87Aotux9w0oVnuuUvlMfNf0/zTI6tWAxEkwIDAQAB
    oz8wPTAdBgNVHQ4EFgQUxCqY4/2za1oxlTQq55CBt3JjTK8wDwYDVR0TBAgwBgEB
    /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAKs9m9wXHEcd3aHP
    CzxNbovmMTP+9Nnq5SKaVJvdoBjHDpS4zRYsioPBThDrrMpdeXXawnW/z0ijzKQE
    UNeBFZeOJr6dV0LoMqEO5L5iY2WMbgFJCkvaU3sF/cBYFPWQKQefTLlTSB4Mk6f1
    q3LZEvbIlxI6ESnpaDCa5FbFguyOwJ1WI0lvObwsT+v9L5BjOmafrQYbSqYL+fyz
    hF9KXdRCquVcKDAoR8wMDn3JyhCnW4z3vhxNu56RPuOhtM+RWyH+Iev9HgwTB7DJ
    ZvI3KYTeMGRTIDbJTzIo86MfS/oYVz2seyXceY+YqqfBZlOJaMxg7v6bknuprzNu
    PXnpMh0AeRgcFSsUkdhiukAItSBkWcNCSmjRL6TK1rMS/TTMrcBE/gmdIwC9jXqC
    /xNTmt/Y/U79rdL6npx2VOT4ZFm6rG/Bz66+5qXoppOw+VU/AUmB6noRdyzurW6r
    x6k7nsv0vpo3R2+6U5SiO0hp2ZhxYLf4SIdT0hFlSQm8uuALOA==
    -----END CERTIFICATE-----`,
        }
      : undefined,
});

export default pool;
