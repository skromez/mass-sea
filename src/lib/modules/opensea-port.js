import env from './env';

const { OpenSeaPort, Network } = window.SeaPort;

let seaport;

export function getSeaPort() {
	if (!seaport) {
		seaport = new OpenSeaPort(window.ethereum, {
			networkName: env.VITE_MAINNET == 1 ? Network.Main : Network.Rinkeby,
apiKey: "2c078439900a4d3d95f967965c3c3276",
		});
	}

	return seaport;
}
