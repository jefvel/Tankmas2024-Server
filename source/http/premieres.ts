import { parse } from 'jsr:@std/datetime/parse';

const premieres = [
  {
    name: "Dr. Good's Movie",
    time: '2024-12-13 02:16PM',
    length: 1034000,
    url: 'https://uploads.ungrounded.net/alternate/6268000/6268139_alternate_291404.720p.mp4?1734069205',
  },
  {
    name: "Sketch Collab 2024",
    time: '2024-12-25 03:00PM',
    length: 720000,
    url: 'https://uploads.ungrounded.net/alternate/6240000/6240927_alternate_292581.720p.mp4?1734838303',
  },
  {
    name: "NG TV",
    time: "2024-12-25 06:00PM",
    length: 6567000,
    url: "https://uploads.ungrounded.net/tmp/6184000/6184852/file/alternate/alternate_1.720p.mp4?f1735146249",
  },
  {
    name: "Fulpware",
    time: '2024-12-31 05:00PM',
    length: 530000,
    url: 'https://uploads.ungrounded.net/alternate/1865000/1865703_alternate_184213.720p.mp4?1716028231',
  },
]

const get_premieres = (_req: Request) => {
  const premiere_list = premieres.map(({ name, time, url, length }) => {
    const date = parse(time, 'yyyy-MM-dd hh:mma');
    const released = date.getTime() <= Date.now() + 1000;
    return {
      name,
      timestamp: date.getTime() / 1000.0,
      released,
      length,
      url: released ? url : undefined,
    };
  });

  const respo = {
    premieres: premiere_list,
  };

  return Response.json(respo);
};

export default get_premieres;
