export const dropCollect = connect => ({
  connectDropTarget: connect.dropTarget(),
});

const letterTarget = {
  drop({
    string,
    index,
    parent,
  }) {
    return {
      targetString: string,
      targetIndex: index,
      targetParent: parent,
    };
  },
};

export default letterTarget;
