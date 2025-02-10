import LatestBlog from "../common/LatestBlog";


const LatestBlogs = ({ latestBlogs }: any) => {
  return (
    <div className="w-full mt-24">
      <div className="w-[90vw] md:max-w-6xl mx-auto">
        <h3 className="h3-bold text-center text-[#1A0B5B] mb-14">Latest Blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LatestBlog image={"/images/Frame3.png"} />
          <LatestBlog image={"/images/Frame4.png"}/>
          <LatestBlog image={"/images/Frame2.png"}/>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
