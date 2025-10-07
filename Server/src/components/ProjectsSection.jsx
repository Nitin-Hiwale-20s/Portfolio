// import React from 'react';

// const projectsData = [
//   {
//     title: 'Weather Website',
//     imageUrl: 'https://nordicapis.com/wp-content/uploads/6-Best-Free-and-Paid-Weather-APIs-1024x576.png',
//     description: "This is a React.js weather app that provides real-time weather info and a 5-day forecast for any city using the OpenWeatherMap API.",
//     techStack: 'React, Node.js, MongoDB',
//     liveLink: 'https://weather-app-using-react-hazel.vercel.app/',
//     githubLink: 'https://github.com/Nitin-Hiwale-20s/Weather-App-using-React',
//   },
//   {
//     title: 'JCB Web Clone',
//     imageUrl: '',
//     description: 'Built a responsive clone of the JCB website that works on all devices (desktop, tablet, mobile).',
//     techStack: 'HTML5, CSS,Java.Script,Bootstrap',
//     githubLink: 'https://github.com/Nitin-Hiwale-20s/JCB-Website-Clone',
//   },

//    {
//     title: 'Zerodha Web Clone',
//     imageUrl: 'data:image/jpeg;base64,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',
//     description: 'Developed a full responsive Zerodha trading platform clone using React.js and JavaScript.',
//     techStack: 'React, Node.js, MongoDB, Node.js, java Script ',
//     liveLink: '#',
//     githubLink:'#',
//   },
//   {
//     title: 'Portfolio ',
//     imageUrl: 'https://yt3.ggpht.com/n0kUfbJxuIFxgGjk5YrAlzRZljyKfWDCtpv-oQ9WeOdctzWrzteN1d1RkQ9Mjc2-q7bbhzaa_Q=s176-c-k-c0x00ffffff-no-rj',
//      description: 'MERN Stack Portfolio: A responsive full-stack web portfolio built with MongoDB, Express, React, and Node.js. Showcases projects, skills, and real-world app functionality with interactive UI.',
//        techStack: 'MERN Stack, Tailwind CSS',
//     liveLink: '#',
//     githubLink: '#',
//   },
//    {
//     title: 'Blog Application (MERN Stack)',
//     imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA3gMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIEBQYHAwj/xABDEAACAQMCAwYEAgYHBwUAAAABAgMABBEFIQYSMQcTQVFhcRQigZEyoRUjUmKxwRYzQnKC0fAlQ2OSorLhCERTwtL/xAAZAQEBAAMBAAAAAAAAAAAAAAAAAQIDBAX/xAAfEQEAAgICAgMAAAAAAAAAAAAAAQIRIQMxEiITMmH/2gAMAwEAAhEDEQA/AOdA0M0M5IA61ki3dn1uDJeXLfsrGv8AE/yqxXsr/pS1iU45VZj7dB/GmXBVv3WiRyFcGZ2b6dP5U4gPf65cNnIiQL9etRUpO0iW3NGnOxO4yM/n1pul2wwJ4pVHnyf5E13uXeMRlI2kyNypB/IkVzS9i251kQ/vxH7UCBdRiZ5JJAkTYRTIeQHG56++PpSysF1cYdI540UYyocZJO+fYCkTXkLmNYZULlhzBTuAAT/LH1pVzBCIkPdABnU7DHUjO49M/agHcRRzCOPMY5S5KMQc5A/h/Ciki7udAJX7x/7TgNsOgx7k0TwLFAzxSyZ2+bnLE77AZztk/nRyxyJG87XBYopILIMAdTkDGegoDkW4RleSSKST8KLgxjzO/wA2+w8KTM80kiO8JQID8vMG5mOOnsM/elSC6LqXWNhHuAhI5j9c4pLztMsZ7mRVHzksQQwxtjBOetAJblZQgCSAK3M/MhGB0pU13DLEqxTwszMAVVgdup2op7mOSFQjMGyN+UjHrXSaWJ7Z2jMcuRynBDDcjrQFdQQxWx5YFXGMBBy7nA8KS0CxwvIssgIHVm5unvmkmzt44S6KQFX8KkqM/wB3pRpbSG35u/cxkczISD64zigHdTkCVpg7qMqHQbDxBxii57iZUd4EKoeYd3ISW39QMfejjS5aHkV4TE2RnkIb364oo7iVY+7FqzAjZ43Uj65wf40Akn72IKIZUVT8zFR06bYO/wD4pX6VsvGdA3TEnyE/RsUm2u4okCTc6sNslGwT748yaVaSROpSV0MhPzIzDOPb2xQc5GEjHk5QpkH4QN9hnp608jFNIUXmjCIqpuQqjAG/pT9BQKAzTS+voLNMyOObwHXJ8BTmaRYIXlcgKilifICsw1u8+Lv5HaZCve4RgryyRKMksMdDtjI6ZrXe/ik6T13xfISPhLSRlcZBmRkChT87ZxvjyG9P9F4ntdTn+H5DHKWfkByQ6qcAgkDPXOPSqZw/daRbsr6lFbhZIVaIBwznfCjlJYlz1zmmsszQ6tcSWS3rRxyhMRyfLhjzlW5mOGBGMYA61qryWmUy1s0g0VsS0Csc5KgnNKNdDJncmlaxFvPo2m3GfGFmiP2G1NJYBHn4nRNSh9YJVlA++DTmHtf4fLhbyz1K2fx5oVcD7N/Kp3TePeEtUZUt9Yt1dtuScGI58sMBVHKz4x0nT9Nitkt9QEkSBUSS3Klj79KleFllktWurlCktw5kKnwz4fapCJLO4AeHuXz0KYIp4qBcYGMUHK4u4IZe7lYoR/aKEAj0NcrKaOVSS4JldnC535c4Bx7AVxu9IW4n72K7u7aXx+HuGQH3GcH600l0jUGUr+k1uFHRLy2jkH5AUEpb4kkuOfdDLygHyAAI/wCYGuUFtbG4n5IUQR4A5NtyuT09GFRfw2sQKoS2s2VBgfDTyQevQZX70P0hfWy4k02/Qli0joY5w3r1U/YURLzQ8rRq1xMyM4HLkHfqN8Z6gUpoLgxmIzRGNtm/V4OM7+OKhjr9uXVricRGPJVbi2khBPq2CKf22twzr8ndyjzt7qNx9iQfyoHMvxJiljECczghZFk/DkYycgY+maNLhbdCrRS/L0HdkgjyzRi/gBzJ3sR/4sLKPvjH511iuYJdop428hzb0DezkSOIQzyRq6jDFmxnoD/CitYoZwZZIlL78rcgPynwz7GnjRo27ICfUVxmtYDzSMpVsbujFW6eYINA3htlcyLzzCMOV5TKxBwT4En8sUYSdneJZsqrYIKDpjPWlWsDtCjRTSQ52K7MMjbO+/h50lFnimaOGRHk5eZzIuOp9Dt/4oCE1zETbpFC/KAB87KQMexo4roWyCKWCfbPzqgYHcnoCT9xQDzwzO7wGRn3KRuPlGMeOAennRfFLHcGa4jliQryjmTOCPPlyB1oBbXltAjRzTBJebLBth966zNaToT+olUKSxwGGKAurKcAd7buPIkfzrjdWliQG+GiZwy8p5Mjc4oO1qD44yABt0p4NhTW03BPmac5xRTPW/n0i7XAJMTfLzcudumfD3rKuIQLe+lTvFMQcfLC55eRgV3bxAyDWj6je4uDF3iAEfgb+1Vc4g0T9LWixQyC2KPzholBPTGNx09PSsL1yM+XUBbqDKpjjeEWlz3MKqUZd1YemwJapLhOy/SupQRzRcyqymW6gnI7/GcFvEnpsR0rtd8I3wu3k3aIpyod+b0yfEehq1cHaYbGYu4OQviOhO3+dYxTCYhc0wsaqPAYo81yVtqPmrarHr/s8vbTL2EyXUYGO6uQGz9SMiqnrml6ZPot3PBanT9UsiDPasSARnBwM48c7VvqAMMN41mXa9pdvcNbfARGXVpg3PHGcFoFGSW9jgD3NBH9meganp1/aalev3NsyrLHAGJJ8RkdB1rcILgSqCPGqJwLq9vr9lFzGL4iNBzKmwwB1A8B6eFXmCMIoxQOhQolrjqN3HYWFxdy7pBG0hHngZxQOKGKzjs04h1bXuKNfFzeSzafb8ixq4GFk6NynGQNjtWjSOsUTSSsscaAlmY4VQPEnwFATRo2xQH3plcaLptyT39jbufMxjNQH9N21KZ4uFdFvdZWMlXuVKw2+fR3xn6U403i4jW4tD4g059K1C4TvLbmlWSOceIV18RjoaB5/RqyQ81rJdWzecFw6Y/PFIk0W+Ge71aSQfs3MEcg+/KD+dT+1CgrXwGr2+8cVpJ6wyy25+wJFEbvVYlKXFlflCMN3bxSjHpsp/jVnxSeUUFaTiNIAI5cxquw+ItpI/uwBWnFprEEsrzRPDcGTblt7hGKADGNyP8ARqcMaNsygimN1omnXWe/s4H90FByF2jTPNIzQRMgVTIuASP4dfPelibv5lW3mgfHzcxOx2IxsaZvwvYqc2slzan/AIM7qPtmm8mg6kgKwas8iA5EdxCjg/XGfzoJKUNJNHHLbRksGIKnmJH1ArmLa2iPeLAI3xkfLgfltUSLTXbUbQ2sp/ahkeJh7bmnVi+p3Eqx3dvMqjxdoyB7coBP1oJu2GIgOm1dHO21GowKJhmgrut2CXYJdckelVuSyuoJP1FzMg8g21XqeHm8KZPpzOcqu3melBEWDXQVe9ld/wC9Utbk10SxCHd1rssIHRlogKaWKPkIHSjxiiqQ3BWrxAiw4l1GCPwUy8+B/iBNONG4DSzupLu9vZry4lADyyHJbHhk+Hp0qzHTtRiz3GsSN5fFWySD/p5DURxLr2qcMWkV1fQWN5E8oj/UM8T9D0B5gennQNNL7PNO0viU63YyyRMcnuA3yAnrirqo6VzhlSaNJEHysARXZcb4IO+D6UBiqZ2uap+jOD5MZLTTonKDuQp5yPb5MH0NXOsc/wDUTd8tro1lk/M8kv2AH86gm+wWxNtwbPfSfjvbt2LE9Qvy9ffmqUkik47vnMjuvC1rJyBE+U6lIpwST/8AEDt+8c+FRuiQSHhHh3hDT3aGS6s1uNQljPzQW7Es+D4M7EqPTJ8KsnEHEuh8EafaxXiSQxcnd28UMJbZR0HgKosMEUUEKQW0aRxRrhEjAVVHkB4Vj3aPPLrfaLwrBp7qzQ3SiEIMnaQF5M56Dl2H7jHoRUbxL2t6vr0i6Vw7aDTY7lu6FxcSAStzepwqe+/uKvXZzwFJw9LJqut3Iu9YnQIOU5SBMD5VPiem/tUF+28K5zzRW8TyzyJFGgyzucBR5k109Au/hisj434ouNc1iHQNDDTT3OUteQ4Vd8GZj9+XyC56sOWiV1DtbsDqJ0/h7Sb/AFi5Bwe5jIGQcHG2fyqdsONFMkUWv6NqGiNKwWOW7j/Usx6LzjYE+GcU74N4U07hLS0tLFQ0zAGe5YfPM3ifbyFd+LpLKLhbVW1PlNp8LJzq4znbYY884qCX67ihVd7Opru44G0SXUCxuGtVJZurL/ZJ9SuKsdUFigRR0KAsUXKKVQoE4ouUml0Dso8zQcnCrtgMfPyrkyk9d6cBc7UbYhjLnGTsKn7IavEI1y5x6DrTWSbBxGqn8zSNQvIraFrqRmdQMYRSx+wptpJeeBYbxgbmNRz92Tjp4E7+Xj1zXNbmm04q3xxREZk6SS6OfnRAP7JTc0XxMikiSA+6ikXEdtbgSSt3fMcLlup9KbNczRzFI8yqRzZbYD0z51jN71nbKKVsnl26Vm3avJ8VqugaYu/NOZmx6bD/ALj9q0jwrMNYb9J9qscWMpZwgH3/ANEV2OZfklSw01GkYKMKoPqf9GmPCN7JqFj8XI5cXH65SfBX+ZR9FIH0qH7RbmWHS44YW5W7qQqf32xGn5vU7wvCsGnRqowMYUeQGw/IUE4Kwv8A9Qk/ea3YQEH9VahgfLnZv/xW6CsI7aB3/aLptq4BSSG2GD0/rHBFQaf2cWNzFw9FqWqAfpHUFWSUAYEaBQsaAeACgHHmTVqaNJVAkRXGdgwzvVe4t4mtuFrS3jS3e6v7kiGzsYThpWG3XwXpk01s7bji/wCSa+1HTNJQ4Jt7e2Nw4HkXZgM496oseoabZalbtb6haQ3ELgqyyRg7enlWY8Ea3Pwxx3ecC3s0kun85/R7yHLRfLzBM/s4yPcVrCghQCckDrjGawfWRJedumnSwSKRLdIyhevKhZTn3CH6GoNX481VdJ4duHMpjMuY+dTgquCWIPgeUHHriqN2G6S95LqXFl/EomuX7i2UDaNF/Fj0/Co9FPnTft+1Ro1trGN8AQ/MAepkbr/yxMP8VTHBFvrOpcOabp+mSTaNo0Fuge9MQ+Iu3Iy3dhtlXJ/EQc+FBd9c4g0vQIVk1O8SFpNo4h80kp8kQbt9Kq/6K1jji8hutfgl0zQIjzw6YTia68jN5DH9irJovC+jaLM1zaWge7f+su7hjLM/u7ZNI4v4ig4Z0n4uWF7meVxFbWyHBmkPRfaqJtQFAVQAANgBjFCqzYLxqYBd3sukcxXnOnLC4x+733McH15SKmdG1OHVtPS7gV0+Zkkik/HDIpIZG9QQRQPaFChQChQoUB0TbsaMUKgNRtTXUWLfIvt/nTrO1NLw4YN61jaMxha9mbafCcNLzsQwdeVivKR06VXbfV/gLiW3u3hd++KrIkgBJZiWzGd8A7DGcipO/v72PULKG1tRLbz8wmm5iO6wP51ROLNMu7niBbnTLN3kMTuJeuSMZOenT5cZyOvpXJfFceLr448vsuuqy2txapLNcW6vbENzSfgyflGfLJxv50nRrhWtCsl2lzNG7LKUGArZzjHsRVKuY7pIIbK3eR4zySd5cuDIrkFeXG2dwMdRUxY3K2cAhj7wkDBHKMkjYtjPjitVr7zMNnx+umh5CgsfDesp4FzqfGWuai24M7RqfY8ufsorRtfvPgNFvbvOO6hZvqBVG7IrTutHaZhlpXJJ8/CvTee7cfyi41nSbBQfmuFZgR1VFZ9vqV+1XbTI+7tI18gKyv8ATkms9qU1okMTwWZkjR/EY5VJ+4I+ta5b7IuN9vGg7ConVuGNG1jUbPUNRsklu7Ng0UuSCMHIB8xnwqWox136eNBQdOI1Xtj1aW4VSNFso4rb0aRQWb0O7DI8DV/FZzron4O7Q34nkhkl0TVIUhvpUGTbOoADkfs/KPufrOax2icLaTZNcyatBcHl5khtXEjyeWB4e5wKCU4s1yDQNHluZpo45HzHAZGwOfHU+gGScb4FZ12UWR4g4mu+LZLdo7W2j+EszKctIR1b3C4zjxaq+1jxB2v8RxXksUlhoUB5Y3boi535f2nPn0GB5Vumk6daaTp9vY6fCsVrAgVFHkP4k1Bgva/EL7tVtrCVm7qRbWHr0BOD/E16E5QNlAUDYY8BWD9tsB0rtC0jW3VjC6xOSBsWifcD6Y+9bdqmp2Ol2bXt/dRwW43Ejt19vMnwAzmgPU9Qg0uwnvro4hgXmOOreQHmSdvrWMcHcQahxp2oWD6yYu7sEnlht41IELdMHzI23qwdoT6tqXCt1r80Utpb2LRzafYtkOSHH66YDxx+FPDJJ32FV7K9FurOzt+M7RJLmSG6livLZBlmgIwWQeLA748R03oN7AwPCq3wn8+o8SyxtmB9VZUx05ljRX/6wae32vWsekpeadKl09wRHaIhyZZT+FdtxjqfIAk9KiTqlnwjoi2EAfUtSiVpZLe2wXkcks7ueiLnJyfbc1RNa3r2k6DbrPq99DaoxwveNux9B1NQmndpXCGo3Agg1mJZC3KO+VowT6FgBWXzaLP2gdoMMF/dmVo073Ue7/q7ZF27pPr8vqct47bXZ8PaLZaf8Bb6VZJaFeVou4UhwevNtvn1qCRVgyhlIIIyCDnNHWGcS8YarwW2r8OaE7GGzvEa3ujhxaxMobud/I/YZHlWucJ3V7e8Nabdapy/GzW6yTcq8oyR5faqJYnFK8fSuROQTnODg4/17UcL8w5fEVB0PSm0686EeNOsE7VwmZEYgHJVct5Ck7gQN3J8JEzAkLnGPU1G6PZxaPCBEZJIR+EYyQWO7deg8dqntTs11Czc2zrk7g+TetV221EwFoLocpVuUZ/nXncuaX307eL3rrtzi063kilF3bRlSOWGZI+7blZubBA3GPHzPlTNbcabcS/BthJTnuyoPL7E+H+ZqSu7xxAxSN3B6Mu+ajoY5JF7y5Lx5JwM4NabXzOm6ImI2ke1e8Fpwdcof/cMIvz3ouD1Gk8KRzS4AigMh+gzUJ2yT/ETaJpan+unMjDzAAH/AN/yp7xzdjR+zy85ThnjWBfdiB/CvYeYp3Y7ate61qeqv8zO5+b1Jyf41t8eMDArNOxmwFvw3HORhpyXrTF6CgVR0VGKAyAwIYAgjBB8ahxwlw333ff0f0rvebm5/g4858+nWpgUoUBIiooVFVVHQKMAUqioxQRuv6DpnEVg1lrFolzATzAHZkbHVT1B9ajtH4J0jSriK4b4q9ngAED39w0/cjoOQMcL9KslCgZ6vp0Gr6XdaddAmG5iMbk+AI61nnAlrr3AdnfaJd6Jfaohn72yuLLk7twRj5izDk6Z39a0+hQVK24Ms9Ru31biWzt31CUgrDbsyxwDfxUgu2OrH2qR1bh+H+jGo6XoVvb2MtzbyJH3SBBzkbEkeOfGp0UVBhXZfrNjwJeazBxiLiw1K4deXvYJHMgGc45Qc7n860SDWNa4r/V6NaXOkaW2z6jdIFmcf8GPwP7zfY1McRa9o+iRo+rSKZm/qLdY+9mkP7ijf+VQZvuNeIF/2XY2/D9oRhbjUAJbgjwIjGw/xH6VBj3aTaadpHF0+hWSvHaiaCWeWaUuWYr8xYnc/iz9K0244s1HiZxovZ7Cy2yARTa1NGVihUbHuwep/wBetZbcabJe9r0WmajcvqZbVIo7iWUD9cgI5sgbYxkYr0pb28FrAkFrDHDCgwscahVUeQAoI7h7Q7bQNJj0+1aWTlJaWWVizyufxMxPnTl5GifnTw8POnTdKbzjINUP7eRJYu9jzj18KjtVuks7V+T55XOAP2jTCS8mtUaNclPIVFW+o2puWfUJWWU7KzD5VHkKgRYm+08l4pCXZuZh4E/5U6uLywvV/wBo6aS37cDcpP0p8nw0y5hljkH7rg0iW2iG55R6k1JrE9rEzG4MrdNEh/qotQI/YMgA/jT+C9giz8DYRRg9Wf5mPuah7/VNJsMia6jeQf7uL5mP2qGk1m7vWzaj4aEdPFj71I46R1Cze09yY8WOdS7TrS3HzLaxDI8jkn/KuvbHb3V3oelafZozma7ywBAyFQ+f96mvDedT7RdZvPCOTu1PhscH/t/OrvrmlNqV9p82cRWwkyv7zcoH5A1mxL4QsFsNGtoAvLyRgY+lWFab26ciKAMACnAoFUYoqMUBijFEKUKAUYoUKA6FChQFR0KFAKr/ABfrlxpUNpZ6VGs2salL3Fmj/hU4yzt+6oyasFUviZ1su0ThS+usC1kS4tVduiSsuV+pAI+tBK8PcLWekO15M7X2rzD9fqFx80jnxC+CL5AVPZAGW8Opo6r3HmvwcOcL3l9M/K5XuoVH4mdthj23P0oMl4TthqPbalwn+7El1KeuSVOPzdftW8VlPYnppu7rWOKHhaOO6k7i15h1RcZI+wHuD5VqxqBJrhJXc1zYVRFXcXNmoG/04yKcCrVImaayQA+FBn11okoOY2dfYkUxfRLpz+smlYerGtFktAT+GuLWa5/DVwilWegrGQXUmpy3sVRcAbVMfCgHZaWtvt0oKj2V2M0aXd3cxsks8pc8wx1rSUG1NbW3SEYRQPanS1FdBSxXNTSxQLoxSRR0ChRik0dAqjoqOgFChQoBR0VCgOo3iHRLLiDS5NP1BX7pyGDocPGw3VlPgQakaFBVY7PjTTrb4a11HSdSVRiKa+gkSUf3uRsN9MGoK/7O9V4p1CG7411wTW8RyljYRGNB5jJyfr1x41o9Cg42dtBZWsVtaRJFBEoRI0GAoHgKWaVRUCTSWpZpJoORWuTLXcikkUDZk2rm0dOiK5kUDYx0XJTgikkUHRaWKFCgUK6DpRUKBQpQo6FAKOhQoDoxQoUAoUKFAdChQoBQoUKAUKKhQEaFChQJNEetChQJNJPShQoEGktQoUHM0k0KFB//2Q==',
//     description: 'Built a full-stack Blog Application using the MERN stack: MongoDB, Express.js, React.js, and Node.js.',
//      techStack: 'React, MERN Stack, Node.js, MongoDB',
//     liveLink: '#',
//     githubLink: '#',
//   },
//   {
//     title: 'Portfolio Generator',
//     imageUrl: 'https://placehold.co/400x400/10B981/FFFFFF?text=Project2',
//     description: 'A tool that helps developers create and deploy their portfolio in minutes.',
//     techStack: 'Next.js, Tailwind CSS',
//     liveLink: '#',
//     githubLink: '#',
//   },

// ];

// const GitHubIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
//     <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//   </svg>
// );

// const LiveLinkIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
//     <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
//     <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
//   </svg>
// );

// const ProjectsSection = () => {
//   return (
//   <section className="w-full bg-slate-50 py-1 md:py-24 text-center ">
//       <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center ">My Projects</h2>
//     <p className="text-gray-600 mb-12">Here are some of the projects I've worked on.</p>
// <div className="grid p-30 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-center">
//   {projectsData.map((project, index) => (
//     <div
//       key={index}
//       className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg overflow-hidden w-80"
//     >
//       {/* Background Blob */}
//       <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-48 h-48 bg-blue-600/70 rounded-full blur-2xl"></div>

//       <div className="relative z-10">
//         {/* Project Title */}
//         <div className="bg-blue-600/80 rounded-lg p-2 mb-4 text-center">
//           <h3 className="text-xl font-bold">{project.title}</h3>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col sm:flex-row items-center gap-4 text-left">
//           <img
//             src={project.imageUrl}
//             alt={project.title}
//             className="w-28 h-28 rounded-full border-4 border-cyan-300 object-cover flex-shrink-0"
//           />
//           <div className="flex-grow">
//             <p className="text-sm leading-snug">{project.description}</p>
//             <p className="mt-2 text-sm">
//               <span className="font-bold">Tech Stack: </span>
//               {project.techStack}
//             </p>
//           </div>
//         </div>

//         {/* Footer Links */}
//         <div className="mt-5 flex justify-between items-center">
//           <div className="flex gap-4">
//             <a
//               href={project.githubLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:scale-110 transition-transform"
//               title="GitHub Repository"
//             >
//               <GitHubIcon />
//             </a>
//             <a
//               href={project.liveLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:scale-110 transition-transform"
//               title="Live Demo"
//             >
//               <LiveLinkIcon />
//             </a>
//           </div>
//           <a
//             href={project.liveLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-1.5 bg-cyan-200/50 text-white text-sm font-semibold rounded-full hover:bg-cyan-200/70 transition-colors"
//           >
//             Live Demo
//           </a>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

// </section>


//   );
// };

// export default ProjectsSection;









import React from 'react';

const projectsData = [
  {
    title: 'Weather Website',
    imageUrl: 'https://nordicapis.com/wp-content/uploads/6-Best-Free-and-Paid-Weather-APIs-1024x576.png',
    description: "This is a React.js weather app that provides real-time weather info and a 5-day forecast for any city using the OpenWeatherMap API.",
    techStack: 'React, Node.js, MongoDB',
    liveLink: 'https://weather-app-using-react-hazel.vercel.app/',
    githubLink: 'https://github.com/Nitin-Hiwale-20s/Weather-App-using-React',
  },
  {
    title: 'JCB Web Clone',
    imageUrl: 'https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg?format=webp&quality=40',
    description: 'Built a responsive clone of the JCB website that works on all devices (desktop, tablet, mobile).',
    techStack: 'HTML5, CSS,Java.Script,Bootstrap',
    githubLink: 'https://github.com/Nitin-Hiwale-20s/JCB-Website-Clone',
    liveLink: '#'
  },

    {
    title: 'Zerodha Web Clone',
    imageUrl: 'https://zerodha.tech/static/images/product-mashup-2020-04.png',
    description: 'Developed a full responsive Zerodha trading platform clone using React.js and JavaScript.',
    techStack: 'React, Node.js, MongoDB, Node.js, java Script ',
    liveLink: '#',
    githubLink:'#',
  },
  {
    title: 'Portfolio ',
    imageUrl: 'https://yt3.ggpht.com/n0kUfbJxuIFxgGjk5YrAlzRZljyKfWDCtpv-oQ9WeOdctzWrzteN1d1RkQ9Mjc2-q7bbhzaa_Q=s176-c-k-c0x00ffffff-no-rj',
      description: 'MERN Stack Portfolio: A responsive full-stack web portfolio built with MongoDB, Express, React, and Node.js. Showcases projects, skills, and real-world app functionality with interactive UI.',
        techStack: 'MERN Stack, Tailwind CSS',
    liveLink: '#',
    githubLink: 'https://github.com/Nitin-Hiwale-20s/Portfolio',
  },
    {
    title: 'Blog Application (MERN Stack)',
    imageUrl: 'https://media.istockphoto.com/id/922745190/photo/blogging-blog-concepts-ideas-with-worktable.jpg?s=612x612&w=0&k=20&c=xR2vOmtg-N6Lo6_I269SoM5PXEVRxlgvKxXUBMeMC_A=',
        description: 'Built a full-stack Blog Application using the MERN stack: MongoDB, Express.js, React.js, and Node.js.',
       techStack: 'React, MERN Stack, Node.js, MongoDB',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: ' Old Portfolio ',
    imageUrl: 'https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-1040x694.webp',
    description: 'A responsive personal portfolio website built using HTML, CSS, and JavaScript. It showcases my skills, projects, and contact information in a clean and modern design. Includes smooth scrolling, dark/light mode toggle, and a simple contact form.',
    techStack: 'HTML, CSS, Java Script',
    liveLink: '#',
    githubLink: 'https://github.com/Nitin-Hiwale-20s/Old-Portfolio',
  },

];

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LiveLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
  </svg>
);

const ProjectsSection = () => {
  return (
   
    <section className="w-full bg-slate-50 py-12 md:py-24 text-center"> 
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">My Projects</h2>
      <p className="text-gray-600 mb-8 sm:mb-12">Here are some of the projects I've worked on.</p>
      
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
           
            className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg overflow-hidden" 
          >
            {/* Background Blob - Kept as is */}
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-48 h-48 bg-blue-600/70 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* Project Title - Kept as is */}
              <div className="bg-blue-600/80 rounded-lg p-2 mb-4 text-center">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              {/* Main Content - Force stack on mobile, then switch to row on small screens and up */}
              <div className="flex flex-col items-center gap-4 text-left sm:flex-row sm:items-start"> 
                {/* Image - Flex-shrink-0 is good. Centered for mobile (default for flex-col) */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-28 h-28 rounded-full border-4 border-cyan-300 object-cover flex-shrink-0"
                />
                <div className="flex-grow text-center sm:text-left"> {/* Aligned text for better mobile readability */}
                  <p className="text-sm leading-snug">{project.description}</p>
                  <p className="mt-2 text-sm">
                    <span className="font-bold">Tech Stack: </span>
                    {project.techStack}
                  </p>
                </div>
              </div>

              {/* Footer Links - Kept as is, justify-between works well */}
              <div className="mt-5 flex justify-between items-center">
                <div className="flex gap-4">
                  {/* GitHub Link */}
                  {project.githubLink && project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                      title="GitHub Repository"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {/* Live Link Icon (only visible if link is valid) */}
                   {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform hidden sm:block" // Hide the icon link on mobile since the button is present
                      title="Live Demo"
                    >
                      <LiveLinkIcon />
                    </a>
                  )}
                </div>
                {/* Live Demo Button (always visible if link is valid) */}
                {project.liveLink && project.liveLink !== '#' && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-cyan-200/50 text-white text-sm font-semibold rounded-full hover:bg-cyan-200/70 transition-colors"
                    >
                        Live Demo
                    </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;