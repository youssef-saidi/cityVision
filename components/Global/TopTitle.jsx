import _ from "lodash";

const TopTitle = ({ title ,subTitle ,type }) => {
  // const user = useSelector((state) => state.user.user);
  // let name;
  // const state = useSelector( state =>  state);

  // if (!_.isEmpty(user)) name = user[0].firstname;

  return (
    <div className="flex flex-col items-center md:items-start text-xl mt-6">
      <h1 className="font-semibold lg:text-3xl">
        { `Hi ${title} 👋`}
      </h1>
      <h3 className="font-normal text-base md:text-start text-center tracking-wider pt-3">
        You Choosed  :: <span className="font-bold">{subTitle}</span> Type :: <span className="font-bold">{type}</span>
      </h3>
    </div>
  );
};

export default TopTitle;
