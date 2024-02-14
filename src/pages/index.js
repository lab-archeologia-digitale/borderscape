import * as React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <Container>
      <h1>
        <b>Borderscapes WebGIS</b>
      </h1>
      <p>The BORDERSCAPE WebGIS databases and web app are outcomes of the BORDERSCAPE Project https://www.borderscapeproject.org/ – Egyptian State Formation and the Changing Socio-Spatial Landscape of the Nile First Cataract Region in the 4th and 3rd millennia BCE. The research leading to these outcomes received funding from the Norwegian Financial Mechanism 2014-2021 through the Norway Grants https://eeagrants.org/countries/poland and the National Science Centre of Poland https://www.ncn.gov.pl/en  (grant n. POLS 2020/37/K/HS3/04097). The project is hosted by the Institute of Mediterranean and Oriental Cultures, Polish Academy of Sciences, Warsaw http://www.iksiopan.pl/index.php/pl/.</p>
      <p>The aims of the BORDERSCAPE Project are to detect the timing and nature of changes in settlement pattern, land use and community structure at the ancient Egyptian southern border during the state formation period; identify what power performances were set in place by the bordering process; explore how the processes of state formation and border-making impacted and transformed Egypt’s southern neighbor, Nubia. These questions are explored as part of the interpretative synthesis presented in Gatto, forthcoming.</p>
      <p>To provide an overview of changes in the settlement pattern, it was collected a dataset including 163 archaeological sites dated from c. 3800 to 2300 BCE. The sites are located in the segment of the Nile Valley comprised between the Kom Ombo Plain and the Bab el-Kalabsha and the nearby desert areas of Kurkur Oasis, Wadi el-Lawi/Wadi Rasras, Wadi Abu Subeira, and Wadi el-Hudi. Half of the sites, 82 in total, were discovered by the Aswan-Kom Ombo Archaeological Project – AKAP https://www.akapegypt.org/ and are mostly unpublished.</p>
      <p>The dataset is presented in total and as divided into six chronological phases, three before and three after the Egyptian state unification date of 3085 BCE: 1. 3800-3500 BCE, Naqada IC-IIB; 2. 3500-3300 BCE, Naqada IICD; 3. 3300-3100 BCE, Naqada III/Dyn. 0; 4. 3100-2650 BCE, Dyn. 1-2; 5. 2650-2500 BCE, Dyn. 3-4; 6. 2500-2300 BCE, Dyn. 5-6.</p>
      <p>Archaeological and historical inundation models are described in Gatto and Siegel, forthcoming, with the database of the historical inundations supplied here as well. The TerraSAR-X / TanDEM-X Digital Elevation Model is kindly provided by the German Aerospace Agency (© DLR 2022)    https://www.dlr.de/en. Historical topographical data are based on The Survey of Egypt maps dated between 1907 and 1934, retrieved from Reisner 1910, Curto et al. 1987, and the CAMEL Lab of the University of Chicago https://isac.uchicago.edu/research/camel. Historical CORONA satellite images are also retrieved from the CAMEL Lab of the University of Chicago https://isac.uchicago.edu/research/camel.</p>
      <p>For more information about the databases and the web app, see the open data publication Siegel et al., forthcoming. </p>

      <h2>References</h2>
Curto S., Maragioglio, V. and C. Rinaldi 1987. Korosko–Kasr Ibrim. Incisioni Rupestri Nubiane. Cisalpino Goliardica, Milano.

Gatto, M.C. forthcoming. BORDERSCAPE – Egyptian State Formation and the Changing Socio-Spatial Landscape of the Nile First Cataract Region in the 4th and 3rd millennia BCE. Travaux de l'Institut des Cultures Méditerranéennes et Orientales de l'Académie Polonaise des Sciences, IKŚiO PAN/HARRASSOWITZ VERLAG.
Gatto, M.C. and O. Siegel forthcoming. Combining Geo-Archaeology and Historical Nile Records to Understand Predynastic Settlement Patterns in the region of the Nile’s First Cataract, Egypt. Open Archaeology.
Reisner, G.A. 1910. The Archaeological Survey of Nubia. Report for 1907–1908, 2 vols. National Printing Department, Cairo.
Siegel, O., Bogdani, J., Urcia, A. and M.C. Gatto forthcoming. The BORDERSCAPE Project WebGIS: State Formation and Settlement Patterns in the Ancient Egyptian Southern Border. Journal of Open Archaeological Data.

    </Container>
  </Layout>
)

export default IndexPage
