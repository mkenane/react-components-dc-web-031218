class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        {this.props.content}
      </div>
    )
  }
}

class BlogPost extends React.Component {
  render() {
    return (
      <div id="blog-post">

        <div id="blog-content">
          Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
        </div>

        <Comment content={"I agree with this statement. - Angela Merkel"}/>
        <Comment content={"A universal truth. - Noam Chomsky"}/>
        <Comment content={"Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451"}/>

      </div>
    )
  }
}
There is quite a bit going on here. Most notably, we are passing the content information to the children components. Let's zero in on the important parts within each component's render method and digest it line by line:

// Comment Component

// this.props.what!? Here, we are making use of the 'templating' nature of React
// components. Information is passed to the component itself, which can then
// dynamically render it.
<div className="comment"> // `className=` is used in place of traditional `class=`
  {this.props.contents}
</div>
// BlogPost Component

<div id="block-post">
  // Following is the actual blog post content!
  <div id="blog-content">
    Dear Reader: Bjarne Stroustrup has the perfect lecture oration.
  </div>
 
