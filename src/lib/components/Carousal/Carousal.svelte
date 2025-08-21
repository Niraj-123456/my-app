<script>
	import * as Carousel from '$lib/components/ui/carousel/index';
	import * as Card from '$lib/components/ui/card/index';

	const images = [
		{
			url: '/hamropatro-android/hamro-chat/-OXXOTmrDUKQIC8kwSgA-beb64c5.jpeg',
			width: 864,
			height: 1920,
			aspectRatio: '9:20',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OXXOTmrDUKQIC8kwSgA-beb64c5.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OVBPux5bwf4ks_lQp0R-305e08b.jpeg',
			width: 864,
			height: 1920,
			aspectRatio: '9:20',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OVBPux5bwf4ks_lQp0R-305e08b.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OVBLYXw_AwpMiHQaSRz-9809ac4.jpeg',
			width: 864,
			height: 1920,
			aspectRatio: '9:20',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OVBLYXw_AwpMiHQaSRz-9809ac4.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OVBLUwrpbbCGYmd78n9-4ad9c9e.jpeg',
			width: 864,
			height: 1920,
			aspectRatio: '9:20',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OVBLUwrpbbCGYmd78n9-4ad9c9e.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OV3J2YnJbZCdoDIijMz-ae483df.jpeg',
			width: 1280,
			height: 1920,
			aspectRatio: '2:3',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OV3J2YnJbZCdoDIijMz-ae483df.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU8WWENrQiZC0ORTOvD-760dc53.jpeg',
			width: 864,
			height: 1920,
			aspectRatio: '9:20',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU8WWENrQiZC0ORTOvD-760dc53.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4qTRGcIEEDpIv5rqM-d65cee2.jpeg',
			width: 75,
			height: 75,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4qTRGcIEEDpIv5rqM-d65cee2.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4eO3V__BgyuKmjpKx-826e6af.jpeg',
			width: 1440,
			height: 1920,
			aspectRatio: '3:4',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4eO3V__BgyuKmjpKx-826e6af.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4dt3lb0zlgCZiWuDC-927771f.jpeg',
			width: 1280,
			height: 1920,
			aspectRatio: '2:3',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4dt3lb0zlgCZiWuDC-927771f.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4cif3IfXCSsQbPBw8-1b3695e.jpeg',
			width: 1920,
			height: 1920,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4cif3IfXCSsQbPBw8-1b3695e.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4cYNH8aN0pttI_dtr-02c21c0.jpeg',
			width: 1920,
			height: 1353,
			aspectRatio: '640:451',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4cYNH8aN0pttI_dtr-02c21c0.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4cHHQd-sOJja9I57U-38ce645.jpeg',
			width: 1920,
			height: 1177,
			aspectRatio: '1920:1177',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4cHHQd-sOJja9I57U-38ce645.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4bPv9ca_XicHjGaIn-91a4ff3.jpeg',
			width: 1280,
			height: 895,
			aspectRatio: '256:179',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4bPv9ca_XicHjGaIn-91a4ff3.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4bAWqeUNh74JrVah8-555138e.jpeg',
			width: 1280,
			height: 1920,
			aspectRatio: '2:3',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4bAWqeUNh74JrVah8-555138e.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4Y6ALTIQhW-8Ip4I6-c8d5411.jpeg',
			width: 1920,
			height: 1920,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4Y6ALTIQhW-8Ip4I6-c8d5411.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4XfyXcH6dTB8bMciK-eb04d15.jpeg',
			width: 1920,
			height: 1280,
			aspectRatio: '3:2',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4XfyXcH6dTB8bMciK-eb04d15.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4XTwy7uXF2Lqa69qU-00fa28f.jpeg',
			width: 1274,
			height: 1920,
			aspectRatio: '637:960',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4XTwy7uXF2Lqa69qU-00fa28f.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4XNiW_K05Jh4-ALux-cf2b07e.jpeg',
			width: 1280,
			height: 1920,
			aspectRatio: '2:3',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4XNiW_K05Jh4-ALux-cf2b07e.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4Wt3yz3AIGCa2WUzj-0116523.jpeg',
			width: 1920,
			height: 1920,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4Wt3yz3AIGCa2WUzj-0116523.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4Wk7GX9zNnybWYNtz-02071c2.jpeg',
			width: 1920,
			height: 1823,
			aspectRatio: '1920:1823',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4Wk7GX9zNnybWYNtz-02071c2.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4W_nLVuVY-yuRgLM9-dc4b1df.jpeg',
			width: 1280,
			height: 1920,
			aspectRatio: '2:3',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4W_nLVuVY-yuRgLM9-dc4b1df.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4SMGplUQoVA8yLYvq-c8ed523.jpeg',
			width: 1280,
			height: 1920,
			aspectRatio: '2:3',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4SMGplUQoVA8yLYvq-c8ed523.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4RL6sn_d_UQryWp-s-319b6bd.jpeg',
			width: 1280,
			height: 1920,
			aspectRatio: '2:3',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4RL6sn_d_UQryWp-s-319b6bd.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4LLno7ZULghJQpCRj-c7f3398.jpeg',
			width: 1274,
			height: 1920,
			aspectRatio: '637:960',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4LLno7ZULghJQpCRj-c7f3398.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4LFjZasXvsRPMyILu-fd99ea8.jpeg',
			width: 1920,
			height: 1920,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4LFjZasXvsRPMyILu-fd99ea8.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4Kbuob7AbQxHnOKwD-664174f.jpeg',
			width: 1920,
			height: 1920,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4Kbuob7AbQxHnOKwD-664174f.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4KRs5ZfyIc6ULImmJ-ea47f10.jpeg',
			width: 1920,
			height: 1280,
			aspectRatio: '3:2',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4KRs5ZfyIc6ULImmJ-ea47f10.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4KKHkp8fiKXGRgKaZ-1d3ef4c.jpeg',
			width: 1440,
			height: 1920,
			aspectRatio: '3:4',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4KKHkp8fiKXGRgKaZ-1d3ef4c.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4Jy9g5P8UQnO6iMRz-cf3faef.jpeg',
			width: 1280,
			height: 1920,
			aspectRatio: '2:3',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4Jy9g5P8UQnO6iMRz-cf3faef.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4JsiFEYjTUMEd2qVn-d27b5e2.jpeg',
			width: 1920,
			height: 1823,
			aspectRatio: '1920:1823',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4JsiFEYjTUMEd2qVn-d27b5e2.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4JgK0SBjrRRLbdnFo-256039e.jpeg',
			width: 1280,
			height: 1920,
			aspectRatio: '2:3',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4JgK0SBjrRRLbdnFo-256039e.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OU4JaoU2xJZI_8kM2JW-ea5ebc3.jpeg',
			width: 1920,
			height: 1280,
			aspectRatio: '3:2',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OU4JaoU2xJZI_8kM2JW-ea5ebc3.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OTzxHDA4xZUsEHezdlh-636cc68.jpeg',
			width: 1442,
			height: 1920,
			aspectRatio: '721:960',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OTzxHDA4xZUsEHezdlh-636cc68.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OTBobcCEO0z6b735GGB-146dd89.jpeg',
			width: 1440,
			height: 1920,
			aspectRatio: '3:4',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OTBobcCEO0z6b735GGB-146dd89.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OScrPzpJ1GlZROUYe52-8395935.jpeg',
			width: 864,
			height: 1920,
			aspectRatio: '9:20',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OScrPzpJ1GlZROUYe52-8395935.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OScqE88IJf67JLeFfsA-bd2e2e6.jpeg',
			width: 1920,
			height: 1920,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OScqE88IJf67JLeFfsA-bd2e2e6.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSYHTThN2DE-pyitWOl-87fc827.jpeg',
			width: 963,
			height: 951,
			aspectRatio: '321:317',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSYHTThN2DE-pyitWOl-87fc827.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSTVaLw-HIaH3MyuHNv-57e9ed2.jpeg',
			width: 1280,
			height: 1280,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSTVaLw-HIaH3MyuHNv-57e9ed2.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSJAqFxawKPXAOvcP-X-bfbb5a1.png',
			width: 1130,
			height: 1130,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSJAqFxawKPXAOvcP-X-bfbb5a1.png'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSJ13e1KrrmL35CmNT8-d1198cc.jpeg',
			width: 1442,
			height: 1920,
			aspectRatio: '721:960',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSJ13e1KrrmL35CmNT8-d1198cc.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSJ0x7qYxd2SDJDnmpY-8d4378b.webp',
			width: 800,
			height: 125,
			aspectRatio: '32:5',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSJ0x7qYxd2SDJDnmpY-8d4378b.webp'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSI-JWWMGtIHhX798EJ-7e16eaf.jpeg',
			width: 1920,
			height: 1280,
			aspectRatio: '3:2',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSI-JWWMGtIHhX798EJ-7e16eaf.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSI-9NSUrvb7yT2acZH-706fe76.jpeg',
			width: 1920,
			height: 975,
			aspectRatio: '128:65',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSI-9NSUrvb7yT2acZH-706fe76.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSI-2tbfFRNBk8Gvkoc-8e9d4fb.jpeg',
			width: 1920,
			height: 1280,
			aspectRatio: '3:2',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSI-2tbfFRNBk8Gvkoc-8e9d4fb.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSHqZxqfZGETfCuDrvJ-1cc1fe0.jpeg',
			width: 1920,
			height: 975,
			aspectRatio: '128:65',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSHqZxqfZGETfCuDrvJ-1cc1fe0.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSHpNw2WTygADMK9Hjg-0c42ebc.jpeg',
			width: 1920,
			height: 975,
			aspectRatio: '128:65',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSHpNw2WTygADMK9Hjg-0c42ebc.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSHo2LV5L9D_K0fbpg7-66c15ca.png',
			width: 428,
			height: 926,
			aspectRatio: '214:463',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSHo2LV5L9D_K0fbpg7-66c15ca.png'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSHnyE98t2Y2HlkzSuw-b0c37ef.jpeg',
			width: 1000,
			height: 667,
			aspectRatio: '1000:667',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSHnyE98t2Y2HlkzSuw-b0c37ef.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSHntndxDzQWr7kyjlf-5977035.jpeg',
			width: 1920,
			height: 1920,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSHntndxDzQWr7kyjlf-5977035.jpeg'
		},
		{
			url: '/hamropatro-android/hamro-chat/-OSHnYbdHwEmdFRdEwXl-21a89d9.jpeg',
			width: 1920,
			height: 1920,
			aspectRatio: '1:1',
			thumbnailUrl: '/hamropatro-android/hamro-chat/-OSHnYbdHwEmdFRdEwXl-21a89d9.jpeg'
		}
	];
</script>

<Carousel.Root class="h-full max-h-screen w-full max-w-[90vw]">
	<Carousel.Content>
		{#each images as image, i}
			<Carousel.Item>
				<div class="carousel-container">
					<img
						src={`https://file-r2.hamropatro.com${image.thumbnailUrl}`}
						alt={`Image ${i + 1}`}
						class="aspect-auto h-full w-auto rounded-lg object-contain"
					/>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>

<style>
	.carousel-container {
		max-width: 100vw;
		max-height: 100vh;
		width: 100%;
		height: 100%;
		background-color: transparent; /* White background for image */
		overflow: hidden; /* Hide anything overflowing, like blur edges */
		display: flex; /* To center the image if it doesn't fill the container */
		justify-content: center;
		align-items: center;
		cursor: default;
	}
</style>
