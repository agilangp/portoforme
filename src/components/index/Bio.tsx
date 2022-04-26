import Card from "./Card"

const Bio = () => {
    return (
        <Card title="Bio">
            <table>
                <tbody>
                    <tr>
                        <td className="pr-4 pb-4">1995</td>
                        <td className="font-semibold pb-4">
                            Born in Madiun Municipality, East Java, Indonesia
                        </td>
                    </tr>
                    <tr>
                        <td className="pr-4 border-y-2 dark:border-zinc-800 py-4">
                            2018
                        </td>
                        <td className="font-semibold border-y-2 dark:border-zinc-800 py-4">
                            Completed Undergraduate Degree of Statistical
                            Computation in Politeknik Statistika - Sekolah
                            Tinggi Ilmu Statistik (PS-STIS)
                        </td>
                    </tr>
                    <tr>
                        <td className="pr-4 pt-4">2018 - present</td>
                        <td className="font-semibold pt-4">
                            Works at Badan Pusat Statistik
                        </td>
                    </tr>
                </tbody>
            </table>
        </Card>
    )
}

export default Bio
