import React  from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PostSkeleton({ data }) {
  return (
    <div className="posts-list">
      {data.map((id) => (
        <React.Fragment key={id}>
          <div className="post-wrapper">
            {/* post Header */}
            <div className="post-header">
              <div className="post-header-left">
                <div>
                  <Skeleton width={30} height={30} circle={true} />
                </div>

                <div className="post-header-content">
                  <div>
                    <Skeleton className="post-header-skeleton" height={5} count={2} />
                  </div>
                </div>
              </div>
              <div className="post-header-right">
                <div>
                  <Skeleton width={30} height={20} />
                </div>
              </div>
            </div>
            <div>
              <Skeleton className="post-body-skeleton" height={400} baseColor="whitesmoke"/>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default PostSkeleton;
