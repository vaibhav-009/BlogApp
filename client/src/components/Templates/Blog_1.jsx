import "../../../css/viewblog.css";
import React from "react";

const Blog_1 = (blog_data) => {
  const dummystring =
    "Lorem ipsum dolor, sit amet mus, illo nihil labore incidunt saepe ea, et id voluptates laborum consequatur tenetur, qui exercitationem corporis cupiditate voluptate corrupti? Harum, officiis. Qui ullam dolores a sint sunt, odit iste distinctio ipsam ea fuga velit alias reprehenderit labore incidunt? Nam, impedit nihil sapiente officiis nemo, numquam ducimus magni sint aliquam sit ratione possimus in quam? Repudiandae molestias quisquam, possimus blanditiis, molestiae similique voluptatum optio eum vitae architecto perferendis laudantium, iusto perspiciatis! Deleniti facere earum adipisci officiis provident natus. Reprehenderit ea necessitatibus corporis ratione aspernatur ducimus, hic, quisquam assumenda minima aliquam mollitia temporibus totam dicta atque magnam accusamus! Porro exercitationem temporibus alias. Veritatis neque provident non, nisi ratione necessitatibus voluptatum repellendus? Voluptas id aliquam nisi deserunt, doloremque iure ut repudiandae, totam labore commodi rerum nemo aliquid facilis iste natus voluptatem necessitatibus. Dolorum et eveniet, optio fugit dignissimos quod provident quae temporibus, molestiae iure voluptatem ut incidunt! Iure commodi temporibus culpa cupiditate nam officia nisi quam quod, pariatur assumenda, aperiam nemo accusantium minima esse autem, sit dolore consequatur! Voluptates iusto soluta possimus dolor exercitationem? Iste mollitia temporibus amet aliquam, exercitationem ratione! Mollitia, impedit! Sequi voluptas rerum temporibus fuga consectetur autem doloribus aliquid nihil? Iure expedita distinctio, consectetur quidem illo esse vero est? Aspernatur placeat explicabo laboriosam reprehenderit dicta iste suscipit odio, debitis, esse optio in magnam? Esse a illum impedit iure sunt cupiditate veniam deserunt aspernatur iusto, ipsa incidunt, maxime sit commodi hic labore deleniti! Ipsam iusto perspiciatis officia minima natus, alias aperiam optio. Voluptate rem quidem provident quod neque facere! Dicta distinctio sunt doloribus ipsa temporibus ut quaerat eveniet illum rem, corrupti similique beatae, et, quas commodi tenetur? Repellendus obcaecati asperiores, laboriosam, debitis dolore quo, magnam quibusdam veniam aut incidunt totam! Mollitia non tenetur ipsum obcaecati vitae expedita adipisci maxime modi eligendi sapiente perferendis minima labore, dolor tempora. Expedita modi rem perferendis maxime unde beatae laborum architecto a omnis sint laboriosam doloremque similique enim voluptatibus eaque, fuga tempora! Similique assumenda autem, repellendus quibusdam porro fugiat magnam minima laborum asperiores! Doloremque dicta architecto accusamus ipsa? Dolorem quia iure fugit esse nostrum quibusdam, labore autem velit possimus nesciunt corrupti rem necessitatibus deleniti. Ex rerum eos ipsum voluptatem perferendis iste obcaecati quaerat tenetur fugit eligendi inventore enim corporis sed porro excepturi dolorum, blanditiis, soluta minima necessitatibus vel quibusdam aliquid. Asperiores, rem incidunt! Non atque sunt, deleniti nihil deserunt molestias nam! Repudiandae ab nam reiciendis animi tempora autem ea? Fugit, maxime eveniet delectus officiis quisquam tenetur ex dignissimos rerum! Saepe velit fuga debitis nemo eos a est, quam, magnam cum blanditiis consectetur necessitatibus quasi earum alias delectus neque voluptates pariatur rerum repellat deleniti, omnis nulla? Excepturi a repellat placeat aliquid harum ad magni sequi illo numquam fuga! Deleniti hic laboriosam dicta eos ex numquam illo, repellat voluptatem? Odit eaque neque iusto veniam aperiam!";
  const title =
    blog_data.title.length == 0 ? "This is the Title" : blog_data.title;
  const para1 = blog_data.para1.length == 0 ? dummystring : blog_data.para1;
  const para2 = blog_data.para2.length == 0 ? dummystring : blog_data.para2;
  const image1Url =
    blog_data.image1Url === null
      ? "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80"
      : blog_data.image1Url;
  const image2Url =
    blog_data.image2Url === null
      ? "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwdmlicmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
      : blog_data.image2Url;
  const tag = blog_data.tag.length == 0 ? "Tag" : blog_data.tag;
  return (
    <>
      <div className="blog_div">
        <div className="head_blog">
          <p style={{ color: "#00ACED" }}>{tag}</p>
          <h1 id="blgvw_title">{title}</h1>
          <img className="blog_view_img1" alt="pic_1" src={image1Url} />
        </div>
        <p id="blgvw_p1">{para1}</p>
        <img className="blog_view_img1" alt="pic_2" src={image2Url} />
        <p id="blgvw_p1">{para2}</p>
      </div>

      {/* {" "}
      <Box sx={{ margin: "20px 80px 20px 80px" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            marginBottom: "20px",
          }}
        >
          {title.length === 0 ? "This is Title" : title}
        </Typography>
        <Box
          sx={{
            height: "50px",
            marginTop: "5px",
            // background: "#5d5b8d",
            display: "flex",
            alignItems: "center",
            color: "black",
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt={"ved"}
              src={
                "https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              }
              sx={{ width: 40, height: 40 }}
            />
          </ListItemAvatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "semi-bold",
                color: "black",
              }}
            >
              {"ved"}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              {"20 Aug"}
            </Typography>
          </Box>
        </Box>
        <img
          style={{
            objectFit: "contain",
            alignItems: "center",
            width: "100%",
            height: "500px",
          }}
          src={
            image1Url === null
              ? "https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              : image1Url
          }
        />
      </Box>
      <Box
        sx={{
          textAlign: "justify",
          display: "flex",
          flexDirection: "column",
          margin: "20px 80px 20px 80px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"Open Sans" , sans-serif',
              fontSize: "17px",
              lineHeight: "28px",
            }}
            variant="p"
          >
            {para1.length === 0
              ? `"Who are you?" the lion yelled at my father. "My name is Elmer
            Elevator." "Where do you think you're going?" "I'm going home," said
            my father. "That's what you think!" said the lion. "Ordinarily I'd
            save you for afternoon tea, but I happen to be upset enough and
            hungry enough to eat you right now." And he picked up my father in
            his front paws to feel how fat he was. My father said, "Oh, please,
            Lion, before you eat me, tell me why you are so particularly upset
            today." "It's my mane," said the lion, as he was figuring how many
            bites a little boy would make. "You see what a dreadful mess it is,
            and I don't seem to be able to do anything about it. My mother is
            coming over on the dragon this afternoon, and if she sees me this
            way I'm afraid she'll stop my allowance. She can't stand messy
            manes! But I'm going to eat you now, so it won't make any difference
            to you." "Oh, wait a minute," said my father, "and I'll give you
            just the things you need to make your mane all tidy and beautiful. I
            have them here in my pack." "You do?" said the lion. "Well, give
            them to me, and perhaps I'll save you for afternoon tea after all,"
            and he put my father down on the ground. My father opened the pack
            and took out the comb and the brush and the seven hair ribbons of
            different colors. "Look," he said, "I'll show you what to do on your
            forelock, where you can watch me. First you brush a while, and then
            you comb, and then you brush again until all the twigs and snarls
            are gone. Then you divide it up in three and braid it like this and
            tie a ribbon around the end." As my father was doing this, the lion
            watched very carefully and began to look much happier. When my
            father tied on the ribbon he was all smiles. "Oh, that's wonderful,
            really wonderful!" said the lion. "Let me have the comb and brush
            and see if I can do it." So my father gave him the comb and brush
            and the lion began busily grooming his mane. As a matter of fact, he
            was so busy that he didn't even know when my father left.`
              : para1}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            padding: "20px 20px 20px 0px",
            marginTop: "10px",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "55%", marginRight: "50px" }}>
            <Typography
              id="para-2"
              sx={{
                fontFamily: '"Open Sans" , sans-serif',
                fontSize: "17px",
                lineHeight: "28px",
              }}
              variant="p"
            >
              {para2.length === 0
                ? ` just the things you need to make your mane all tidy and
              beautiful. I have them here in my pack." "You do?" said the lion.
              "Well, give them to me, and perhaps I'll save you for afternoon
              tea after all," and he put my father down on the ground. My father
              opened the pack and took out the comb and the brush and the seven
              hair ribbons of different colors. "Look," he said, "I'll show you
              what to do on your forelock, where you can watch me. First you
              brush a while, and then you comb, and then you brush again until
              all the twigs and snarls are gone. Then you divide it up in three
              and braid it like this and tie a ribbon around the end." As my
              father was doing this, the lion watched very carefully and began
              to look much happier. When my father tied on the ribbon he was all
              smiles. "Oh, that's wonderful, really wonderful!" said the lion.
              "Let me have the comb and brush and see if I can do it." So my
              father gave him the comb and brush and the lion began busily
              grooming his mane. As a matter of fact, he was so busy that he
              didn't even know when my father left.`
                : para2}
            </Typography>
          </Box>
          <Box sx={{ width: "40%" }}>
            <img
              style={{
                objectFit: "contain",
                alignItems: "center",
                width: "100%",
                height: "300px",
              }}
              src={
                image2Url === null
                  ? "https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                  : image2Url
              }
            />
          </Box>
        </Box>
        <h1>The End</h1>
      </Box>{" "} */}
    </>
  );
};

export default Blog_1;
