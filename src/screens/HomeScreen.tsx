import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import axios from "axios";

import type { HomeProps } from "../navigation/NavigationTypes";
import { setProducts, addProducts } from "../redux/products/actions";
import { AppState } from "../redux/store";
import { bindActionCreators, Dispatch } from "redux";

import ProductCardList from "../components/ProductCardList/ProductCardList";

import type { Product } from "../types/product";

import getProductsByFilter from "../methods/getProductsByFilter";

const HomeScreen = (props: HomeProps & AppProps) => {
  const [page, setPage] = useState(1);
  const testText = process.env.EXPO_PUBLIC_TEST;

  const navigateToDetail = () => {
    props.navigation.navigate("Detail", { productId: "TestProductId" });
  };

  useEffect(() => {
    getProductsByFilter(props.setProducts, page, null);
  }, []);

  const getNextPageProducts = () => {
    const newPage = page + 1;
    setPage(newPage);
    getProductsByFilter(props.addProducts, newPage, null);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar />
      {/* <Text>HOME {testText}</Text>
      <Text>PRODUCT {props.products[0].name}</Text>
      <Button title="Detail" onPress={navigateToDetail} />
      <Button
        title="SET PROD"
        onPress={() => {
          props.setProducts([
            {
              createdAt: "2023-07-17T07:21:02.529Z",
              name: "Bentley Focus",
              image: "https://loremflickr.com/640/480/food",
              price: "51.00",
              description:
                "Quasi adipisci sint veniam delectus. Illum laboriosam minima dignissimos natus earum facere consequuntur eius vero. Itaque facilis at tempore ipsa. Accusamus nihil fugit velit possimus expedita error porro aliquid. Optio magni mollitia veritatis repudiandae tenetur nemo. Id consectetur fuga ipsam quidem voluptatibus sed magni dolore.\nFacilis commodi dolores sapiente delectus nihil ex a perferendis. Totam deserunt assumenda inventore. Incidunt nesciunt adipisci natus porro deleniti nisi incidunt laudantium soluta. Nostrum optio ab facilis quisquam.\nSoluta laudantium ipsa ut accusantium possimus rem. Illo voluptatibus culpa incidunt repudiandae placeat animi. Delectus id in animi incidunt autem. Ipsum provident beatae nisi cumque nulla iure.",
              model: "CTS",
              brand: "Lamborghini",
              id: "1",
            },
            {
              createdAt: "2023-07-17T02:49:46.692Z",
              name: "Aston Martin Durango",
              image: "https://loremflickr.com/640/480/food",
              price: "374.00",
              description:
                "Odio et voluptates velit omnis incidunt dolor. Illo sint quisquam tenetur dolore nemo molestiae. Dolorum odio dicta placeat. Commodi rerum molestias quibusdam labore. Odio libero doloribus. Architecto repellendus aperiam nulla at at voluptatibus ipsum.\nFugit expedita a quo totam quaerat amet eveniet laboriosam. Ad assumenda atque porro neque iusto. Inventore repudiandae esse non sit veritatis ab reprehenderit quas. Sit qui natus exercitationem quis commodi vero.\nIure reiciendis quas corrupti incidunt repellat voluptatem esse eveniet. Aliquid illo cum doloremque similique. Blanditiis corporis repellendus cumque totam quod iusto dolorum. Incidunt a eos eum voluptas tempora voluptas reiciendis autem.",
              model: "Roadster",
              brand: "Smart",
              id: "2",
            },
            {
              createdAt: "2023-07-16T08:46:46.400Z",
              name: "Ford XC90",
              image: "https://loremflickr.com/640/480/city",
              price: "735.00",
              description:
                "Minima quas corrupti delectus. Pariatur itaque at. Voluptate expedita unde excepturi dolores quasi quis. Delectus occaecati quaerat iusto nihil reiciendis voluptatem excepturi illum.\nVoluptatem qui ullam quas commodi ullam. Incidunt atque excepturi eveniet id consectetur maxime quia suscipit minima. Dicta excepturi molestiae dolore neque. Repellat minus sit inventore amet delectus omnis. Corrupti dolorem quam occaecati quisquam.\nVoluptatibus dolore quos dolorem nemo iste ipsa totam quisquam odio. Eveniet enim animi adipisci iusto sit eveniet. Provident soluta maxime voluptatum accusamus consectetur nostrum sequi atque. Sunt doloribus quibusdam quia maxime vero ad accusantium. Esse animi velit velit aliquid itaque voluptatem.",
              model: "Taurus",
              brand: "Ferrari",
              id: "3",
            },
            {
              createdAt: "2023-07-17T05:04:01.235Z",
              name: "Rolls Royce Taurus",
              image: "https://loremflickr.com/640/480/transport",
              price: "779.00",
              description:
                "Similique iste repellat minima recusandae similique. Voluptates omnis perferendis eius possimus dolor aut dignissimos temporibus. Quo molestias praesentium quasi rerum. Vitae harum pariatur recusandae reprehenderit. Blanditiis deleniti delectus quia. Suscipit blanditiis quod sunt expedita animi quis.\nInventore provident molestiae dicta aut corrupti. Dicta odio dolore minima voluptatibus velit velit ea voluptatibus. Aliquam occaecati magnam consectetur illum natus. Ipsum est ut quia est ab. Eius ad tempore libero ipsa ea atque.\nPariatur aperiam voluptas similique occaecati repellendus. Voluptas necessitatibus ut exercitationem non tenetur enim. Iure aliquam maiores eveniet consequatur nihil.",
              model: "Jetta",
              brand: "Volkswagen",
              id: "4",
            },
            {
              createdAt: "2023-07-17T02:25:46.420Z",
              name: "Land Rover Impala",
              image: "https://loremflickr.com/640/480/nightlife",
              price: "607.00",
              description:
                "Nesciunt dolorum occaecati sit error iure ullam labore tempora eveniet. Porro alias consequuntur. Voluptas nesciunt eligendi nostrum. Magni alias possimus maiores harum qui illo iure doloremque ipsam. Architecto quos recusandae ullam at distinctio.\nAccusamus amet sequi provident amet aut nemo id odit atque. Numquam facilis ad deleniti. Voluptates corporis fuga nihil nesciunt inventore enim possimus magni.\nPorro dolorum fugiat consectetur veniam ex labore consequuntur dolorum. Optio aut voluptas esse quisquam eveniet. Consequuntur dolorem ipsa. Cupiditate alias corrupti accusamus.",
              model: "Fortwo",
              brand: "Mercedes Benz",
              id: "5",
            },
            {
              createdAt: "2023-07-17T01:39:05.497Z",
              name: "Chevrolet Fortwo",
              image: "https://loremflickr.com/640/480/technics",
              price: "829.00",
              description:
                "Dolor explicabo libero. Maxime consequuntur voluptatum labore. Officiis et sit soluta impedit ad. Officiis neque occaecati blanditiis commodi molestias. Facilis itaque laboriosam consequuntur doloremque.\nOmnis ipsum adipisci error quia tenetur. Voluptates quod eos quibusdam. Laudantium esse quis sint aut unde. Atque debitis nobis. Aliquid consequatur iste voluptates omnis. Consectetur ab assumenda omnis unde consequuntur.\nSimilique tenetur nostrum incidunt accusantium. Quaerat possimus perferendis earum nulla cupiditate excepturi et. Quae fugit necessitatibus voluptates vitae necessitatibus praesentium. Sunt eveniet commodi. Quas quos magni. Illum repudiandae necessitatibus consequatur quo iure cum accusantium.",
              model: "A4",
              brand: "Tesla",
              id: "6",
            },
            {
              createdAt: "2023-07-16T20:15:09.557Z",
              name: "Honda Model S",
              image: "https://loremflickr.com/640/480/technics",
              price: "607.00",
              description:
                "Magnam tempora incidunt at voluptatum itaque iure. Ipsa ullam deleniti incidunt dicta consectetur illo cum. Repellat dolorum autem voluptatum.\nAssumenda recusandae nemo atque ipsam labore cumque laboriosam illo laudantium. Iure consequuntur tempora iste. Nihil minima autem vitae veniam fugit.\nVelit magnam tempore quae. Facere repellat culpa mollitia. Fugiat amet at porro ratione aut iure veritatis fugiat sint.",
              model: "Taurus",
              brand: "Fiat",
              id: "7",
            },
            {
              createdAt: "2023-07-17T05:48:15.194Z",
              name: "Nissan El Camino",
              image: "https://loremflickr.com/640/480/fashion",
              price: "823.00",
              description:
                "Labore nam adipisci vel officiis in repellat. Enim blanditiis maxime magni temporibus eos dignissimos molestias amet nulla. Fugiat libero architecto voluptatum qui quis tempore quasi hic corporis. Accusamus aut ratione beatae illum fuga corporis quae quibusdam eligendi.\nSoluta commodi omnis totam temporibus veritatis. Facilis tempora necessitatibus consequatur quis deleniti. Culpa provident veniam dolor. Ipsum culpa itaque exercitationem velit. Itaque cum aut quae autem ipsam natus. Consectetur nam vitae voluptatibus cupiditate assumenda officiis eaque.\nA magni voluptates sequi et adipisci labore sed libero atque. Minus fugiat voluptas dolores iste quasi commodi suscipit. Fuga quo harum aut. Temporibus aliquam sequi eligendi maiores cum molestiae. Dicta neque quidem occaecati ipsum unde non ex.",
              model: "F-150",
              brand: "Land Rover",
              id: "8",
            },
            {
              createdAt: "2023-07-16T22:48:02.246Z",
              name: "Cadillac Expedition",
              image: "https://loremflickr.com/640/480/food",
              price: "17.00",
              description:
                "Quod eligendi illum ab aliquid maxime quasi velit. Asperiores suscipit ab amet iste voluptatibus provident accusamus consequatur. Aperiam eius eligendi.\nOdit totam porro tenetur. Quasi aliquam quas. Illo officiis fugit recusandae blanditiis asperiores perferendis illum dolorum eum. Quibusdam pariatur quaerat expedita excepturi.\nAliquid praesentium praesentium. Maxime nesciunt quia ab. Rem repellat tempore repellat.",
              model: "Corvette",
              brand: "Nissan",
              id: "9",
            },
            {
              createdAt: "2023-07-16T08:48:55.384Z",
              name: "Ford Focus",
              image: "https://loremflickr.com/640/480/transport",
              price: "257.00",
              description:
                "Quos esse maiores sed repellendus expedita praesentium optio accusamus asperiores. Tempore dolores in. Qui nihil tenetur quis minima distinctio consequatur enim voluptatibus. Nobis provident temporibus perferendis.\nQuas nemo itaque officiis eaque cum ex. Aut eius error atque error iste. Enim commodi architecto soluta nemo molestias quae exercitationem et aliquam.\nEt velit fuga aut quaerat ex autem tempora. Nam natus numquam quae odio libero eum ipsam hic. Quidem voluptate aut vel velit modi eveniet. Rem officiis aliquam ducimus odit veniam molestias id magni. Temporibus enim quisquam nobis. Molestiae sit ducimus harum libero voluptates.",
              model: "CTS",
              brand: "Maserati",
              id: "10",
            },
            {
              createdAt: "2023-07-16T13:51:28.920Z",
              name: "Dodge Mercielago",
              image: "https://loremflickr.com/640/480/fashion",
              price: "873.00",
              description:
                "Explicabo laboriosam tempore aspernatur. Quaerat non quidem corporis dolorum saepe. Porro aut aut nobis officiis excepturi modi in.\nAdipisci laboriosam quaerat sit maxime incidunt rem illo. At nostrum qui sed iure omnis fugit. Quod voluptatibus repellendus perspiciatis illum iure magnam velit. Blanditiis minima officiis.\nEos ad delectus tempore officiis optio culpa amet ipsam nesciunt. Doloremque et maiores et doloribus eos quam earum. Esse iusto quo voluptatibus. Pariatur harum doloremque saepe.",
              model: "Ranchero",
              brand: "Smart",
              id: "11",
            },
            {
              createdAt: "2023-07-16T10:59:47.744Z",
              name: "Polestar Expedition",
              image: "https://loremflickr.com/640/480/animals",
              price: "339.00",
              description:
                "Tempore tenetur dolor consequatur iste tempora distinctio ad. Alias aliquid id molestias totam ipsam. Maxime cum minus voluptas voluptates ducimus nisi voluptate. Quaerat placeat explicabo a officiis enim nisi impedit sequi id. Aut necessitatibus fugiat eveniet qui illum aliquid quam.\nDignissimos fugiat doloribus placeat recusandae. Placeat eius cum omnis. Expedita quasi id totam quia. Ullam sapiente officiis id aut iure aperiam vel ex expedita. Itaque accusamus excepturi repellendus culpa excepturi quisquam unde dolores.\nIn fugit officiis omnis vero cum. Quia corrupti id quae ipsam cupiditate consequuntur et. Cumque et tempora error suscipit error magnam hic voluptatum dolorem.",
              model: "Colorado",
              brand: "Bugatti",
              id: "12",
            },
            {
              createdAt: "2023-07-17T06:42:48.049Z",
              name: "Mercedes Benz CX-9",
              image: "https://loremflickr.com/640/480/cats",
              price: "374.00",
              description:
                "Excepturi asperiores inventore temporibus enim animi. Blanditiis est beatae ad quas numquam deserunt. Culpa porro exercitationem natus quaerat fugiat officia debitis deleniti non.\nFacilis explicabo mollitia illo quis adipisci error necessitatibus. Libero dicta quis quas ratione. Perferendis eius nemo saepe autem debitis officia dolores.\nLaborum quasi accusantium quae modi asperiores. Consectetur tempore saepe error aliquid quasi sapiente placeat dolore perferendis. Aspernatur nisi doloremque reiciendis cum.",
              model: "911",
              brand: "Tesla",
              id: "13",
            },
            {
              createdAt: "2023-07-16T09:23:29.722Z",
              name: "Porsche Fortwo",
              image: "https://loremflickr.com/640/480/abstract",
              price: "46.00",
              description:
                "Alias voluptate iure ad impedit. Quis veniam iusto rem nostrum. At ullam ipsum culpa error. Temporibus perspiciatis cum reiciendis consequatur. Occaecati nobis mollitia facere laudantium unde repudiandae odio possimus.\nCommodi harum aut dolore sed. Et cumque aperiam. Iste deleniti nesciunt.\nIpsa atque accusantium autem explicabo inventore praesentium placeat incidunt. Enim iste aliquam aperiam neque aperiam amet sapiente. Vero sit aliquid quo tempore. Accusantium consequuntur expedita at incidunt earum facilis ratione.",
              model: "Altima",
              brand: "Land Rover",
              id: "14",
            },
            {
              createdAt: "2023-07-16T12:14:58.689Z",
              name: "Mini Accord",
              image: "https://loremflickr.com/640/480/nightlife",
              price: "644.00",
              description:
                "Sequi assumenda nam eveniet corporis beatae iusto voluptate explicabo. Earum vel tempore consequatur quia expedita magni ipsam incidunt. Quo doloremque magnam hic placeat.\nRepellat iste ex temporibus beatae placeat. Enim quae expedita voluptas asperiores aliquam incidunt. Quaerat accusantium soluta beatae fuga culpa in. Explicabo culpa eveniet.\nSoluta nihil quibusdam. Porro suscipit magni neque labore dicta inventore autem consectetur. Et ipsa distinctio ad molestias aliquam. Quidem blanditiis cumque consectetur odit praesentium. Nisi sequi eius at sapiente. Totam atque quasi dolorum ea blanditiis nisi praesentium dolore.",
              model: "Mercielago",
              brand: "Bugatti",
              id: "15",
            },
            {
              createdAt: "2023-07-16T07:58:05.937Z",
              name: "Honda Challenger",
              image: "https://loremflickr.com/640/480/people",
              price: "192.00",
              description:
                "Eaque nostrum alias. Adipisci nulla recusandae eius. Suscipit fugiat est. Assumenda cumque autem eveniet. Harum quidem voluptatum eum id id inventore ad facilis.\nDolores itaque eos exercitationem illum laboriosam culpa. Corporis reiciendis explicabo voluptatibus. Sed doloribus doloremque a incidunt labore illum. Quisquam molestias nemo. Quos quaerat explicabo vel modi consequuntur.\nMagni provident voluptatibus laborum minus expedita. Commodi asperiores occaecati sunt eligendi asperiores facere molestias doloribus. Vel ut incidunt ullam. Architecto illum aspernatur atque architecto. Vitae labore velit. Dicta ipsa sunt deleniti nulla sint et perspiciatis expedita reiciendis.",
              model: "Land Cruiser",
              brand: "Nissan",
              id: "16",
            },
            {
              createdAt: "2023-07-17T06:30:13.572Z",
              name: "Nissan Corvette",
              image: "https://loremflickr.com/640/480/cats",
              price: "116.00",
              description:
                "Est architecto eligendi possimus quasi recusandae dolorem accusamus. Voluptates culpa laudantium libero veniam. Facilis est ad. Veniam quisquam ab eligendi. Nulla eligendi soluta ipsam facere animi praesentium libero fuga. Dolores quis dolore accusamus recusandae illo rerum quasi nobis error.\nSuscipit repellat cumque eaque cum ad laborum aperiam ipsa. Modi error maiores provident aliquam fuga dolores modi eveniet nihil. Amet laborum error necessitatibus incidunt ipsa.\nEst id ab asperiores impedit consequatur. Eius minima libero ea. Beatae cumque doloribus inventore hic quod nisi laborum.",
              model: "Model X",
              brand: "Mercedes Benz",
              id: "17",
            },
            {
              createdAt: "2023-07-16T16:05:07.072Z",
              name: "Chrysler A8",
              image: "https://loremflickr.com/640/480/sports",
              price: "131.00",
              description:
                "Illum architecto fugit et nobis fugit corporis. Excepturi voluptatem tempora esse debitis. Iure magni pariatur veniam.\nPerferendis cupiditate dolore. Nulla rem quia fuga vero commodi optio. Incidunt quidem ducimus quas eligendi nihil.\nIpsum non quam nostrum fugit sunt amet aut hic quis. Suscipit doloribus quasi excepturi laboriosam beatae accusantium. Dicta at necessitatibus eveniet quae distinctio omnis cum sapiente numquam. Harum occaecati natus.",
              model: "Accord",
              brand: "Aston Martin",
              id: "18",
            },
            {
              createdAt: "2023-07-17T06:50:55.466Z",
              name: "Mercedes Benz A8",
              image: "https://loremflickr.com/640/480/people",
              price: "760.00",
              description:
                "Nesciunt amet architecto provident minus. Nesciunt deleniti voluptates vero. Maiores est architecto mollitia. Ipsa placeat beatae incidunt culpa tenetur nesciunt nobis nihil sint. Excepturi temporibus enim vel quasi excepturi. Corporis nam nostrum rerum eos suscipit ea quibusdam ab.\nBeatae dolores natus quo fuga. Excepturi exercitationem id quaerat rerum. Modi id provident ipsam illum totam dolorum iste hic totam. Animi enim pariatur laudantium. Quod possimus quod corrupti ab inventore voluptates enim aliquid.\nEius laborum nam exercitationem eius corrupti. Nam numquam ab id. Et commodi natus doloribus adipisci quisquam nesciunt optio. Eos corrupti possimus laboriosam repellat magni minus reprehenderit alias quasi. Placeat eum distinctio. Provident beatae animi officia iure.",
              model: "Altima",
              brand: "Tesla",
              id: "19",
            },
            {
              createdAt: "2023-07-16T08:39:41.686Z",
              name: "Rolls Royce A8",
              image: "https://loremflickr.com/640/480/people",
              price: "892.00",
              description:
                "Soluta magnam unde animi. Error dicta at pariatur temporibus omnis ex iste. Inventore nulla atque debitis pariatur maiores libero sed dolore. Enim iste placeat dignissimos itaque nihil omnis perferendis quasi.\nAdipisci distinctio quo ipsa aperiam perferendis animi. Voluptatum aliquid modi ullam sapiente tempore natus a. Consequuntur provident exercitationem ab aspernatur. Ea soluta possimus. Corrupti recusandae porro.\nDignissimos occaecati hic optio quidem. Reiciendis numquam soluta iste quasi consequatur aperiam reprehenderit. Ab repudiandae pariatur repudiandae quidem.",
              model: "Volt",
              brand: "Chevrolet",
              id: "20",
            },
            {
              createdAt: "2023-07-17T03:57:58.169Z",
              name: "Aston Martin Jetta",
              image: "https://loremflickr.com/640/480/cats",
              price: "444.00",
              description:
                "Neque facilis explicabo modi laudantium ut vero perferendis nemo. Soluta laboriosam eligendi hic dicta dicta. Deleniti omnis velit quidem voluptate iusto et voluptatum nihil tenetur. Esse deserunt incidunt. Porro reprehenderit hic incidunt debitis eligendi libero quis.\nQuibusdam cum quibusdam laudantium delectus ipsam ullam. Repellendus nobis occaecati veritatis ea dolores. Aperiam a labore ex dolore suscipit fugiat. Aliquid sed qui. Velit accusamus soluta natus.\nAspernatur non architecto non nam accusantium laudantium possimus. Nam laboriosam suscipit eaque. Iusto possimus eum odio recusandae non delectus hic laudantium adipisci. At eos sint quae. Officia fugiat fuga debitis debitis. Nemo ad eos beatae omnis nisi.",
              model: "Mustang",
              brand: "Honda",
              id: "21",
            },
            {
              createdAt: "2023-07-17T04:47:18.825Z",
              name: "Volvo Malibu",
              image: "https://loremflickr.com/640/480/food",
              price: "657.00",
              description:
                "Doloribus saepe eligendi molestias animi. Provident incidunt labore nulla consequuntur ullam quam qui. Reprehenderit mollitia aliquam dolor. Sunt impedit expedita quisquam pariatur sed. Ullam dolorem similique voluptate minima itaque praesentium temporibus. Earum est facilis maxime voluptates debitis aspernatur.\nVoluptatibus quia aliquam deserunt repellendus nihil sint architecto rem. Sapiente modi quos. Minima velit unde veniam asperiores laboriosam doloremque nemo. Iusto ab tempora optio minima sequi animi alias velit. Deserunt quaerat tempora sunt hic accusamus hic vero delectus sunt.\nRepudiandae itaque at. A accusantium molestiae error ad ab velit. Natus quam vero enim quo numquam incidunt placeat veniam. Voluptas perspiciatis libero. Officiis deleniti hic facilis voluptates qui recusandae ut.",
              model: "Golf",
              brand: "Ferrari",
              id: "22",
            },
            {
              createdAt: "2023-07-17T05:37:40.184Z",
              name: "Honda Countach",
              image: "https://loremflickr.com/640/480/nature",
              price: "305.00",
              description:
                "Nulla dicta recusandae id. Distinctio amet error saepe dignissimos officia sint. Qui aliquid sunt assumenda sunt quae occaecati sint numquam.\nSed eligendi eos dolorum. Veniam corrupti maiores adipisci animi ab ex. Iusto magni voluptates. Officiis sed repellat alias excepturi aspernatur fuga. A placeat praesentium ipsum.\nRepellat quos neque voluptatum. Necessitatibus mollitia perferendis alias ut voluptas temporibus inventore fugit. Necessitatibus veniam voluptatibus odio mollitia nihil amet repudiandae libero maxime. Dolores soluta quo nisi rem iure magni.",
              model: "Malibu",
              brand: "Aston Martin",
              id: "23",
            },
            {
              createdAt: "2023-07-17T05:34:08.264Z",
              name: "Aston Martin Focus",
              image: "https://loremflickr.com/640/480/animals",
              price: "128.00",
              description:
                "Officia odit nobis omnis iure quisquam voluptatibus recusandae eos. Autem error natus fugit. Molestias reprehenderit amet necessitatibus deleniti nam recusandae est id quidem. Sapiente inventore hic iusto earum quod vel dolores repellendus. Id explicabo quasi.\nVoluptates quidem perferendis. Earum officia hic animi. Totam ipsam omnis eum eaque libero quam magnam. Deserunt consectetur ut provident voluptas corporis.\nAmet totam possimus numquam ratione sunt deleniti repellat. Impedit suscipit enim. Accusamus numquam neque nihil doloribus amet temporibus consectetur.",
              model: "Roadster",
              brand: "Rolls Royce",
              id: "24",
            },
            {
              createdAt: "2023-07-17T01:24:59.268Z",
              name: "Volvo Malibu",
              image: "https://loremflickr.com/640/480/technics",
              price: "504.00",
              description:
                "Omnis ut sint sint iusto. Quos debitis nemo temporibus neque consequuntur ut cupiditate quos. Ipsum hic itaque rerum nobis praesentium. Quae debitis rem a culpa odit dignissimos qui. Quo sint iste beatae recusandae voluptates rerum reiciendis officiis.\nFacere ut iure. Distinctio quos corporis pariatur. Ad ratione ducimus fugit quo corporis soluta. Molestiae ratione repellat veniam officiis harum delectus minima.\nNobis magni quisquam. Consectetur accusantium maxime veniam. Repellendus quisquam ipsam dolores quo ab praesentium non. Veritatis ipsam ullam eligendi sapiente dignissimos odit tempore. Illum quam earum similique quam occaecati ut quo. Quia dignissimos labore neque ipsa.",
              model: "Alpine",
              brand: "Rolls Royce",
              id: "25",
            },
            {
              createdAt: "2023-07-16T17:06:32.182Z",
              name: "Fiat Grand Caravan",
              image: "https://loremflickr.com/640/480/business",
              price: "457.00",
              description:
                "Perspiciatis repellat laborum. Rem nemo libero minus dolorem ratione incidunt maiores maiores asperiores. Nemo explicabo fuga esse quia necessitatibus.\nRepellendus molestiae in. Porro temporibus reiciendis minus doloremque. Temporibus debitis placeat distinctio reiciendis animi. Repellendus optio expedita. Maiores praesentium odio saepe consectetur cum cum animi.\nNatus sit eaque itaque maxime dolore explicabo nemo libero. Sequi animi animi minima excepturi. Natus repellendus expedita hic amet nam explicabo consectetur corrupti fuga.",
              model: "Alpine",
              brand: "Land Rover",
              id: "26",
            },
          ]);
        }}
      /> */}

      <ProductCardList
        data={props.products}
        getNextPageProducts={getNextPageProducts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state: AppState) => ({
  ...state.products,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ setProducts, addProducts }, dispatch);

type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
