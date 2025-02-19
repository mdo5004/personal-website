import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Link,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

export function Index() {
  return (
    <body>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: 4,
          gap: 4,
          padding: 4,
        }}
      >
        <Card
          className="card"
          sx={{
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          <CardContent>
            <div style={{ float: 'right' }}>
              <Avatar
                sx={{ width: 116, height: 116, margin: 4 }}
                src="https://static.shineweddinginvitations.com/catalog/Company-Headshots-1172-Uncropped.jpg"
              />
            </div>
            <Typography
              sx={{
                color: 'text.primary',
                fontSize: 36,
              }}
            >
              Michael O’Connell
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: 'text.secondary', fontSize: 24 }}
            >
              Full Stack Web Developer
            </Typography>

            <Typography gutterBottom sx={{ maxWidth: 500 }}>
              Hi, I’m Michael, a full stack web developer with a passion for
              making things that are beautiful and functional.
            </Typography>
            <Typography gutterBottom>
              I have experience with a variety of technologies, including React,
              Next.js, Node.js, Material UI, Storybook, Google Cloud Platform,
              and Firebase.
            </Typography>
            <Typography sx={{ fontWeight: 'bold', marginBlock: 3 }}>
              I built the all-new{' '}
              <Link href="https://www.shineweddinginvitations.com">
                Shine Wedding Invitations
              </Link>{' '}
              website.
            </Typography>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                gap: 10,
                marginTop: 10,
              }}
            >
              {[
                { label: 'React', icon: <ReactIcon /> },
                { label: 'Next.js', icon: <Vercel /> },
                { label: 'TypeScript', icon: <TypeScript /> },
                { label: 'MUI', icon: <MUI /> },
                { label: 'Firebase', icon: <Firebase /> },
                { label: 'Storybook', icon: <StorybookIcon /> },
                { label: 'Cypress', icon: <CypressLogomarkDarkColor /> },
                { label: 'Playwright', icon: <Playwright /> },
              ].map(({ label, icon }) => {
                return <Chip icon={icon} label={label} key={label} />;
              })}
            </div>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{
            maxWidth: 800,
            width: '100%',
            margin: '0 auto',
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: 'text.primary', fontSize: 24 }}
            >
              Projects
            </Typography>
            <List>
              <ListItem>
                <Link href="https://www.shineweddinginvitations.com">
                  Shine Wedding Invitations
                </Link>{' '}
                <Link href="https://www.loom.com/share/cb0466d4b59a4ebeb85f5c8fc19b3d29?sid=a4a8894d-d3f8-44aa-9fa5-567554795613">
                  (demo)
                </Link>
              </ListItem>
              <ListItem>
                Shine Order Manager{' '}
                <Link href="https://www.loom.com/share/c9f835be6dbf4e4db1e8761629afdf3b?sid=e2a2897e-7475-4e56-88a1-60d52ac02f63">
                  (demo)
                </Link>
              </ListItem>
              <ListItem>
                Shine CMS{' '}
                <Link href="https://www.loom.com/share/c9f835be6dbf4e4db1e8761629afdf3b?sid=e2a2897e-7475-4e56-88a1-60d52ac02f63">
                  (demo)
                </Link>
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{
            maxWidth: 800,
            width: '100%',
            margin: '0 auto',
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: 'text.primary', fontSize: 24 }}
            >
              Bio
            </Typography>
            <Typography>
              I live in Center Valley, Pennsylvania with my wife, two kids, and
              Wheaten terrier. While working toward a PhD in chemical
              engineering at North Carolina State University, I developed a
              passion for writing code and creating delightful user interfaces
              for data analysis. I have been working as a full stack web
              developer since I graduated from the Flatiron School’s full stack
              web developer program in 2017.
            </Typography>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{
            maxWidth: 800,
            width: '100%',
            margin: '0 auto',
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: 'text.primary', fontSize: 24 }}
            >
              Interests
            </Typography>
            <Typography>
              When I’m not at work or taking care of my kids, you can find me
              jogging or riding my Peloton. Right now I am <i>really</i> into
              the AppleTV+ show{' '}
              <Link href="https://www.imdb.com/title/tt11280740/">
                Severance
              </Link>{' '}
              and Nickel Creek’s latest album{' '}
              <Link href="https://open.spotify.com/album/2ruZGj3O7oL91f9re3BXLq?si=ziQBc7F8TxK4aL8nC6NOWQ">
                Celebrants
              </Link>
              . I’m not a big gamer, but I recently discovered the masterpiece{' '}
              <Link href="https://www.celestegame.com">Celeste</Link>.
            </Typography>
          </CardContent>
        </Card>
        <Card
          className="card"
          sx={{
            maxWidth: 800,
            width: '100%',
            margin: '0 auto',
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: 'text.primary', fontSize: 24 }}
            >
              Résumé
            </Typography>
            <Typography
              component={'h2'}
              sx={{
                fontSize: 32,
              }}
              gutterBottom
            >
              Summary
            </Typography>
            <Typography component={'p'} sx={{ marginBottom: 4 }}>
              Full-Stack Web Developer with 7 years of experience in building
              scalable, user-friendly web applications for a woman-owned,
              women-led e-commerce company. Skilled in TypeScript, React,
              Next.js, Storybook, Playwright and other modern web frameworks.
              Proven ability to create pixel-perfect websites and fully-featured
              web apps from scratch.
            </Typography>
            <Typography
              component={'h2'}
              sx={{
                fontSize: 32,
              }}
              gutterBottom
            >
              Experience
            </Typography>
            <Typography sx={{ fontSize: 24, fontWeight: 500 }} component="h3">
              Software Developer
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Shine Wedding Invitations</p>
              <p>2017 – Present (7 years)</p>
            </div>
            <p>Rochester, NY (Remote)</p>
            <ul>
              <li>
                <Link href="www.shineweddinginvitations.com">
                  Spearheaded the multi-year transformation of a mobile-first
                  e-commerce website{' '}
                </Link>{' '}
                using TypeScript, React, Next.js and other modern frameworks,
                achieving significant improvements in branding, product
                customization, and user experience.
              </li>
              <li>
                Built thousands of pixel-perfect React components in
                collaboration with design & product teams, adhering to
                design-system specifications and accessibility standards.
              </li>
              <li>
                Developed custom CMS and order management tools using real-time
                databases, streamlining content management and business
                operations.
              </li>
              <li>
                Engineered a Nrwl/Nx monorepo and optimized CI/CD pipelines,
                creating scalable infrastructure for business operations.
              </li>
              <li>
                Improved site reliability with Jest unit tests, Cypress
                integration tests, and Playwright end-to-end tests.
              </li>
              <li>
                Mentored junior developers with test-driven development and code
                reviews, fostering a culture of quality and collaboration.
              </li>
            </ul>
            <Typography sx={{ fontSize: 24, fontWeight: 500 }} component="h3">
              Graduate Research Assistant
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>North Carolina State University</p>
              <p>2011 – 2016</p>
            </div>
            <p>Raleigh, NC</p>
            <ul>
              <li>
                Managed complex technical projects and collaborated with
                interdisciplinary teams to solve ambiguous challenges.
              </li>
              <li>
                Honed{' '}
                <Link href="https://doi.org/10.1371/journal.pcbi.1004159">
                  technical writing
                </Link>
                , mentoring, and problem-solving skills while presenting
                research findings at national conferences.
              </li>
              <li>
                Taught undergraduates in chemical engineering fundamentals, led
                recitation sessions, and assisted with exam proctoring.
              </li>
            </ul>
            <Typography
              component={'h2'}
              sx={{
                fontSize: 32,
                marginTop: 4,
              }}
              gutterBottom
            >
              Education
            </Typography>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '1ch 0',
              }}
            >
              <li style={{ marginBottom: '1ch' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }} component="h3">
                    Full Stack Development
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }}>2017</Typography>
                </div>
                <p>Flatiron School </p>
                <p>New York, NY (Remote)</p>
              </li>
              <li style={{ marginBottom: '1ch' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }} component="h3">
                    Ph.D. (ABD), Chemical Engineering
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }}>2016</Typography>
                </div>
                <p>North Carolina State University</p>
                <p>Raleigh, NC</p>
              </li>
              <li style={{ marginBottom: '1ch' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }} component="h3">
                    M.S., Chemical Engineering
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }}>2013</Typography>
                </div>
                <p>North Carolina State University</p>
                <p>Raleigh, NC</p>
              </li>
              <li style={{ marginBottom: '1ch' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }} component="h3">
                    B.A., Music
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }}>2009</Typography>
                </div>
                <p>Pennsylvania State University</p>
                <p>University Park, PA</p>
              </li>
            </ul>
            <Typography
              component={'h2'}
              sx={{
                fontSize: 32,
                marginTop: 4,
              }}
              gutterBottom
            >
              Skills
            </Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{ width: 100 }}>Front End</TableCell>
                  <TableCell>
                    TypeScript, React, Material UI, Next.js, CSS-in-JS, React
                    Router, Redux
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Back End</TableCell>
                  <TableCell>Node, Express, Firebase, NoSQL, MySQL</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Testing</TableCell>
                  <TableCell>
                    Cypress, Playwright, Storybook, Jest, Mocha, Chai
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Other</TableCell>
                  <TableCell>
                    Google Cloud Platform, Bitbucket CI/CD pipelines, Nrwl/Nx
                    monorepos, Google Analytics, SEO, Web Accessibility
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </body>
  );
}

export default Index;

const Vercel = () => (
  <svg
    width="16"
    height="14"
    style={{ position: 'relative', left: '8px' }}
    viewBox="0 0 76 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" />
  </svg>
);

const ReactIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 569 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'relative', left: '7px' }}
  >
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="React-Logo-Filled-(1)" fill="#087EA4" fill-rule="nonzero">
        <path
          d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201"
          id="Path"
        ></path>
        <path
          d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539"
          id="Shape"
        ></path>
      </g>
    </g>
  </svg>
);
const TypeScript = () => (
  <svg
    fill="none"
    viewBox="0 0 512 512"
    height="16"
    width="16"
    style={{ position: 'relative', left: '8px' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="#3178c6" height="512" rx="50" width="512" />
    <rect fill="#3178c6" height="512" rx="50" width="512" />
    <path
      clip-rule="evenodd"
      d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
      fill="#fff"
      fill-rule="evenodd"
    />
  </svg>
);
const MUI = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    style={{ position: 'relative', left: '8px' }}
    fill="none"
  >
    <path
      fill="#0073E6"
      fill-rule="evenodd"
      d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z"
      clip-rule="evenodd"
    />
  </svg>
);
const Firebase = () => (
  <svg
    width="20"
    style={{
      position: 'relative',
      left: '7px',
      top: '3px',
    }}
    viewBox="0 0 327 409"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_60_3832)">
      <path
        d="M122.838 267.267C134.271 271.869 146.676 274.6 159.7 275.054C177.327 275.67 194.088 272.026 209.073 265.103C191.104 258.043 174.83 247.719 160.941 234.883C151.937 249.298 138.621 260.684 122.838 267.267Z"
        fill="#FF9100"
      />
      <path
        d="M160.938 234.887C129.233 205.564 110 163.124 111.625 116.574C111.678 115.062 111.758 113.551 111.851 112.041C106.173 110.572 100.245 109.676 94.1443 109.463C85.4119 109.158 76.9555 110.241 68.9718 112.49C60.5083 127.315 55.4009 144.325 54.7647 162.546C53.1226 209.568 81.5788 250.655 122.835 267.271C138.619 260.688 151.934 249.315 160.938 234.887Z"
        fill="#FFC400"
      />
      <path
        d="M160.94 234.886C168.311 223.089 172.78 209.259 173.3 194.359C174.669 155.165 148.32 121.448 111.853 112.04C111.759 113.55 111.68 115.061 111.627 116.572C110.001 163.122 129.235 205.563 160.94 234.886Z"
        fill="#FF9100"
      />
      <path
        d="M169.222 1.86735C148.452 18.5064 132.051 40.4465 122.128 65.7209C116.447 80.1978 112.877 95.7483 111.835 112.049C148.303 121.458 174.652 155.174 173.283 194.368C172.763 209.269 168.28 223.085 160.922 234.895C174.811 247.745 191.085 258.056 209.055 265.116C245.122 248.443 270.712 212.568 272.194 170.134C273.154 142.641 262.591 118.138 247.665 97.4553C231.903 75.5811 169.222 1.86735 169.222 1.86735Z"
        fill="#DD2C00"
      />
    </g>
    <defs>
      <clipPath id="clip0_60_3832">
        <rect width="327" height="409" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const StorybookIcon = () => (
  <svg
    fill="none"
    height="20"
    style={{
      position: 'relative',
      left: '10px',
    }}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.620279 18.4293L0.000720095 1.92089C-0.0197415 1.37568 0.398305 0.913625 0.942836 0.879592L14.9844 0.00199235C15.5387 -0.0326493 16.0161 0.38859 16.0507 0.942857C16.052 0.96374 16.0527 0.984658 16.0527 1.00558V18.9945C16.0527 19.5498 15.6025 20 15.0471 20C15.0321 20 15.0171 19.9997 15.002 19.999L1.58 19.3962C1.05727 19.3727 0.639903 18.9522 0.620279 18.4293Z"
      fill="#FF4785"
    ></path>
    <path
      clip-rule="evenodd"
      d="M13.8804 0.0710449L11.9479 0.191825L11.8536 2.45837C11.8522 2.49321 11.8629 2.52747 11.884 2.55526C11.9341 2.62126 12.0282 2.63418 12.0942 2.58411L12.9746 1.91625L13.7182 2.50205C13.7461 2.524 13.7808 2.53536 13.8163 2.53413C13.8991 2.53124 13.9639 2.46178 13.961 2.37898L13.8804 0.0710449ZM12.3763 7.66099C12.0225 7.93579 9.38733 8.12329 9.38733 7.73208C9.44302 6.23927 8.77469 6.17383 8.40339 6.17383C8.05066 6.17383 7.45659 6.28046 7.45659 7.08017C7.45659 7.89512 8.32476 8.35519 9.34377 8.8952C10.7914 9.66232 12.5433 10.5908 12.5433 12.927C12.5433 15.1662 10.724 16.4031 8.40339 16.4031C6.00853 16.4031 3.91569 15.4342 4.15205 12.075C4.24488 11.6806 7.2895 11.7743 7.2895 12.075C7.25237 13.4612 7.56798 13.8689 8.36626 13.8689C8.9789 13.8689 9.25737 13.5312 9.25737 12.9625C9.25737 12.1019 8.35281 11.594 7.31222 11.0098C5.90324 10.2187 4.24488 9.28767 4.24488 7.15126C4.24488 5.01868 5.7115 3.59696 8.32913 3.59696C10.9468 3.59696 12.3763 4.9969 12.3763 7.66099Z"
      fill="white"
      fill-rule="evenodd"
    ></path>
  </svg>
);
const Playwright = () => (
  <svg
    width="26"
    height="19.2"
    style={{
      position: 'relative',
      left: '7px',
    }}
    viewBox="0 0 260 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2_31)">
      <path
        d="M84.38 108.352C74.824 111.064 68.554 115.819 64.424 120.57C68.38 117.109 73.679 113.931 80.826 111.905C88.137 109.833 94.374 109.848 99.528 110.843V106.813C95.131 106.411 90.091 106.731 84.38 108.352ZM63.987 74.475L28.497 83.825C28.497 83.825 29.143 84.739 30.341 85.958L60.433 78.028C60.433 78.028 60.006 83.523 56.303 88.438C63.308 83.139 63.987 74.475 63.987 74.475ZM93.696 157.885C43.75 171.337 17.326 113.455 9.32599 83.413C5.62999 69.545 4.01599 59.043 3.58599 52.265C3.54508 51.652 3.55344 51.0367 3.61099 50.425C1.02099 50.58 -0.220012 51.927 0.031988 55.82C0.461988 62.593 2.07599 73.095 5.77199 86.967C13.769 117.005 40.196 174.887 90.142 161.435C101.013 158.506 109.18 153.172 115.312 146.362C109.66 151.466 102.588 155.485 93.696 157.885ZM103.08 39.05V42.605H122.67C122.269 41.346 121.864 40.212 121.462 39.05H103.08Z"
        fill="#2D4552"
      />
      <path
        d="M127.05 68.325C135.86 70.828 140.52 77.005 142.983 82.471L152.807 85.261C152.807 85.261 151.467 66.129 134.162 61.214C117.973 56.614 108.011 70.209 106.799 71.968C111.509 68.613 118.385 65.866 127.05 68.325ZM205.247 82.559C189.043 77.939 179.085 91.562 177.891 93.296C182.604 89.945 189.477 87.197 198.138 89.667C206.935 92.173 211.59 98.343 214.061 103.813L223.898 106.613C223.898 106.613 222.537 87.478 205.247 82.559ZM195.487 133.002L113.769 110.157C113.769 110.157 114.654 114.642 118.048 120.45L186.851 139.684C192.515 136.407 195.487 133.002 195.487 133.002ZM138.832 182.176C74.127 164.828 81.949 82.386 92.419 43.32C96.73 27.22 101.162 15.254 104.838 7.232C102.645 6.781 100.828 7.936 99.034 11.586C95.13 19.5 90.14 32.387 85.312 50.427C74.845 89.493 67.022 171.933 131.724 189.281C162.221 197.451 185.98 185.034 203.69 165.532C186.88 180.758 165.416 189.295 138.832 182.176Z"
        fill="#2D4552"
      />
      <path
        d="M103.081 138.565V121.928L56.858 135.036C56.858 135.036 60.273 115.19 84.38 108.352C91.691 106.28 97.929 106.294 103.081 107.289V39.05H126.226C123.706 31.263 121.268 25.268 119.22 21.102C115.833 14.207 112.361 18.778 104.479 25.371C98.927 30.009 84.896 39.904 63.781 45.593C42.667 51.287 25.596 49.777 18.474 48.543C8.377 46.801 3.096 44.583 3.59 52.264C4.02 59.038 5.633 69.541 9.33 83.412C17.326 113.451 43.754 171.332 93.7 157.88C106.746 154.365 115.954 147.416 122.337 138.56H103.081V138.564V138.565ZM28.493 83.825L63.987 74.475C63.987 74.475 62.953 88.129 49.647 91.637C36.337 95.141 28.493 83.825 28.493 83.825Z"
        fill="#E2574C"
      />
      <path
        d="M236.664 39.84C227.438 41.457 205.303 43.472 177.948 36.14C150.585 28.812 132.431 15.996 125.238 9.97201C115.041 1.43201 110.556 -4.50399 106.142 4.47401C102.24 12.392 97.249 25.279 92.419 43.32C81.953 82.386 74.13 164.825 138.832 182.173C203.519 199.506 237.958 124.195 248.425 85.126C253.255 67.089 255.373 53.431 255.955 44.624C256.62 34.648 249.767 37.544 236.664 39.84ZM106.668 72.161C106.668 72.161 116.864 56.302 134.158 61.218C151.463 66.133 152.803 85.264 152.803 85.264L106.668 72.161ZM148.883 143.324C118.464 134.414 113.773 110.157 113.773 110.157L195.487 133.003C195.487 132.999 178.993 152.123 148.883 143.323V143.324ZM177.773 93.474C177.773 93.474 187.956 77.627 205.247 82.556C222.537 87.479 223.898 106.61 223.898 106.61L177.774 93.474H177.773Z"
        fill="#2EAD33"
      />
      <path
        d="M86.9279 126.51L56.8579 135.032C56.8579 135.032 60.1239 116.423 82.2759 109.049L65.2499 45.147L63.7789 45.594C42.6639 51.288 25.5939 49.778 18.4719 48.544C8.37494 46.803 3.09294 44.584 3.58694 52.266C4.01694 59.04 5.63094 69.542 9.32694 83.413C17.3239 113.452 43.7519 171.333 93.6969 157.881L95.1679 157.419L86.9289 126.509L86.9279 126.51ZM28.4929 83.825L63.9869 74.474C63.9869 74.474 62.9529 88.128 49.6469 91.636C36.3369 95.14 28.4929 83.825 28.4929 83.825Z"
        fill="#D65348"
      />
      <path
        d="M150.255 143.658L148.879 143.323C118.46 134.413 113.769 110.157 113.769 110.157L155.906 121.935L178.214 36.211L177.944 36.141C150.582 28.812 132.428 15.996 125.234 9.97099C115.038 1.43099 110.552 -4.50401 106.138 4.47399C102.24 12.392 97.249 25.279 92.419 43.32C81.953 82.386 74.13 164.825 138.832 182.172L140.158 182.472L150.255 143.658ZM106.668 72.16C106.668 72.16 116.864 56.301 134.158 61.217C151.463 66.132 152.803 85.263 152.803 85.263L106.668 72.16Z"
        fill="#1D8D22"
      />
      <path
        d="M88.46 126.072L80.396 128.361C82.302 139.101 85.66 149.408 90.93 158.513C91.848 158.311 92.758 158.137 93.692 157.881C96.141 157.221 98.412 156.402 100.598 155.51C94.708 146.77 90.812 136.706 88.46 126.072ZM85.312 50.428C81.168 65.895 77.46 88.158 78.481 110.488C80.307 109.695 82.237 108.956 84.381 108.348L85.873 108.014C84.053 84.162 87.987 59.857 92.419 43.32C93.4697 39.3978 94.5942 35.4958 95.792 31.616C93.8404 32.8641 91.848 34.0471 89.818 35.163C88.1841 40.2115 86.6816 45.3015 85.312 50.428Z"
        fill="#C04B41"
      />
    </g>
    <defs>
      <clipPath id="clip0_2_31">
        <rect width="256" height="192" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CypressLogomarkDarkColor = () => (
  <svg
    width="16"
    viewBox="0 0 963 961.4"
    xmlSpace="preserve"
    style={{
      position: 'relative',
      left: '8px',
    }}
  >
    <path
      className="st0"
      d="M340.4 382.8c38.4 0 69.6 20.5 85.6 56.1l1.2 2.8 64.4-21.9-1.3-3.3c-24.9-60.8-82.4-98.5-149.9-98.5-47.5 0-86.1 15.2-118 46.5-31.7 31.1-47.7 70.2-47.7 116.2 0 45.7 16.1 84.6 47.7 115.6 31.9 31.3 70.5 46.5 118 46.5 67.5 0 124.9-37.8 149.9-98.5l1.3-3.3-64.5-21.9-1.1 2.9c-14.4 35.1-46.4 56-85.6 56-26.7 0-49.3-9.3-67.1-27.7-18.1-18.6-27.2-42.1-27.2-69.6 0-27.7 8.9-50.7 27.2-70.2 17.9-18.4 40.4-27.7 67.1-27.7z"
    />
    <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={992.991}
      y1={483.702}
      x2={568.87}
      y2={758.304}
    >
      <stop offset={0.081} stopColor="#69d3a7" />
      <stop offset={1} stopColor="#69d3a7" stopOpacity={0} />
    </linearGradient>
    <path
      d="M620 934.4l-19.2-63.3C774 818.5 890.4 661.6 890.4 480.7c0-49.9-8.9-98.7-26.5-144.9l61.8-23.5c20.5 53.8 30.9 110.4 30.9 168.5-.1 210.1-135.3 392.4-336.6 453.6z"
      fill="url(#SVGID_1_)"
    />
    <path
      d="M872.5 361.1c-52.9-172.6-210-288.5-391-288.5-24.6 0-49.2 2.2-73.2 6.5L396.6 14c27.8-5 56.4-7.6 84.9-7.6 210.2 0 392.7 134.7 454.2 335.2l-63.2 19.5z"
      fill="#69d3a7"
    />
    <linearGradient
      id="SVGID_00000148651166423619572140000005281795770302588552_"
      gradientUnits="userSpaceOnUse"
      x1={323.384}
      y1={12.396}
      x2={56.936}
      y2={577.503}
    >
      <stop offset={0} stopColor="#69d3a7" />
      <stop offset={0.823} stopColor="#2ab586" />
      <stop offset={1} stopColor="#1cae7f" />
    </linearGradient>
    <path
      d="M36.9 647.9C16.7 594.5 6.5 538.2 6.5 480.7c0-245 183.9-447.9 427.8-471.9l6.5 65.8C230.9 95.3 72.6 269.9 72.6 480.7c0 49.5 8.8 98 26.1 143.9l-61.8 23.3z"
      fill="url(#SVGID_00000148651166423619572140000005281795770302588552_)"
    />
    <path
      className="st0"
      d="M743.7 324L652 556.4 559.6 324H484l129.6 317.2-94.4 229 66.1 13.2L815.1 324z"
    />
    <linearGradient
      id="SVGID_00000098925399032608532410000009288675756932014269_"
      gradientUnits="userSpaceOnUse"
      x1={5.828}
      y1={697.848}
      x2={704.494}
      y2={917.116}
    >
      <stop offset={0.077} stopColor="#1cae7f" />
      <stop offset={0.164} stopColor="#1ca379" />
      <stop offset={0.316} stopColor="#1c8568" />
      <stop offset={0.516} stopColor="#1b554d" />
      <stop offset={0.719} stopColor="#1b1e2e" />
    </linearGradient>
    <path
      d="M531.1 841.4l-13.9 33.7c-3.2 7.7-10.5 13-18.7 13.3-5.7.2-11.3.4-17.1.4-181.5 0-343.1-121.5-393-295.5l-63.6 18.2c58 202.1 245.7 343.3 456.5 343.4h.1c6.6 0 13.2-.1 19.8-.4 33.9-1.4 64.2-22.7 77.2-54.2l18.8-45.7-66.1-13.2z"
      fill="url(#SVGID_00000098925399032608532410000009288675756932014269_)"
    />
  </svg>
);
