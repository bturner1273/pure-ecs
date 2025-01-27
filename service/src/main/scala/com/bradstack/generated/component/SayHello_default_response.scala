package com.bradstack.generated.component

import zio.schema._
import zio.schema.annotation._

@noDiscriminator
@discriminatorName("type")
sealed trait SayHello_default_response
object SayHello_default_response {


 implicit val codec: Schema[SayHello_default_response] = DeriveSchema.gen[SayHello_default_response]
case class SayHello_default_response_oneOf(
 `type`: String,
 message: String
) extends SayHello_default_response
object SayHello_default_response_oneOf{
 implicit val codec: Schema[SayHello_default_response_oneOf] = DeriveSchema.gen[SayHello_default_response_oneOf]
}
}