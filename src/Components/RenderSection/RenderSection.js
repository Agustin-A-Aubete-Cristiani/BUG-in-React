import React from "react";
import s from './RenderSection.scss'

const RenderSection = (props) => {
  return <section className={s.RenderSection}>{props.children}</section>
}

export default RenderSection;